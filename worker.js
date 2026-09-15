// ==========================================================
//  Cloudflare Worker: прокси для формы обратной связи
//  Токен бота хранится в секретах Worker'а, а не в браузере.
// ==========================================================
//
// НАСТРОЙКА (один раз):
// 1. Зарегистрируйся на https://dash.cloudflare.com (бесплатно)
// 2. Workers & Pages → Create → Create Worker
// 3. Вставь этот код вместо заготовки, нажми Deploy
// 4. Settings → Variables → Add variable (Secret!):
//      имя: BOT_TOKEN     значение: <новый токен от BotFather>
//      имя: CHAT_ID       значение: 5618732570
// 5. Скопируй адрес воркера (вида https://xxx.workers.dev)
//    и вставь его в main.js вместо WORKER_URL

const ALLOWED_ORIGIN = 'https://natovchanin.github.io'; // домен твоего сайта

export default {
  async fetch(request, env) {
    // Разрешаем запросы только с твоего сайта
    const origin = request.headers.get('Origin') || '';

    const corsHeaders = {
      'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    // Preflight-запрос браузера
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405, headers: corsHeaders });
    }

    if (origin !== ALLOWED_ORIGIN) {
      return new Response('Forbidden', { status: 403, headers: corsHeaders });
    }

    try {
      const { text } = await request.json();

      if (!text || typeof text !== 'string' || !text.trim()) {
        return new Response(JSON.stringify({ ok: false, error: 'empty text' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      // Режем на части по 4000 символов, как в исходном коде
      const messages = [];
      let current = '';
      for (const line of text.split('\n')) {
        if ((current + line + '\n').length > 4000) {
          messages.push(current);
          current = '';
        }
        current += line + '\n';
      }
      if (current) messages.push(current);

      for (const msg of messages) {
        const res = await fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: env.CHAT_ID, text: msg.trim() }),
        });
        const data = await res.json();
        if (!data.ok) {
          throw new Error(data.description || 'Telegram API error');
        }
      }

      return new Response(JSON.stringify({ ok: true }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    } catch (e) {
      return new Response(JSON.stringify({ ok: false, error: String(e.message || e) }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
  },
};
