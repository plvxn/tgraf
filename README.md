# tgraf

Modern Telegram Bot Framework for Node.js -- a fork of [telegraf](https://github.com/telegraf/telegraf) with Bot API 9.5 support.

## Why this fork

The original telegraf library supports Bot API 7.1. This fork brings full support for Bot API 9.5, including all new methods, types, and features introduced in recent API versions.

## Installation

```bash
npm install tgraf
```

## Quick start

```js
const { Telegraf } = require('tgraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('Welcome'));
bot.help((ctx) => ctx.reply('Send me a message and I will echo it back'));
bot.on('text', (ctx) => ctx.reply(ctx.message.text));

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
```

## Credits

This project is a fork of [telegraf](https://github.com/telegraf/telegraf) by the Telegraf contributors. All credit for the original architecture and design goes to them.

## License

MIT
