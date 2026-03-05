# @plvxn/tgraf

Modern Telegram Bot Framework for Node.js — fork of [telegraf](https://github.com/telegraf/telegraf) with Bot API 9.5 support.

[![Bot API](https://img.shields.io/badge/Bot%20API-v9.5-f36caf.svg?style=flat-square&logo=Telegram)](https://core.telegram.org/bots/api)
[![npm](https://img.shields.io/npm/v/@plvxn/tgraf?style=flat-square)](https://www.npmjs.com/package/@plvxn/tgraf)

## Why this fork

The original telegraf supports Bot API 7.1. This fork adds full support for Bot API 9.5: new methods, types, business accounts, gifts, stories, checklists, and more.

## Installation

```bash
npm install @plvxn/tgraf
```

## Quick start

```js
const { Telegraf } = require('@plvxn/tgraf')
const { message } = require('@plvxn/tgraf/filters')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a message'))
bot.on(message('text'), (ctx) => ctx.reply(ctx.message.text))

bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
```

## API compatibility

The API is compatible with telegraf. Use the [original telegraf documentation](https://telegraf.js.org) — the API surface is the same. This fork adds new methods and types from Bot API 9.5.

## Credits

Fork of [telegraf](https://github.com/telegraf/telegraf) by the Telegraf contributors.

## License

MIT
