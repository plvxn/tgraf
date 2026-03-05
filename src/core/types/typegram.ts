import * as Typegram from '@plvxn/tgraf-types'

// internal type provisions
export * from '@plvxn/tgraf-types/api'
export * from '@plvxn/tgraf-types/inline'
export * from '@plvxn/tgraf-types/manage'
export * from '@plvxn/tgraf-types/markup'
export * from '@plvxn/tgraf-types/message'
export * from '@plvxn/tgraf-types/methods'
export * from '@plvxn/tgraf-types/passport'
export * from '@plvxn/tgraf-types/payment'
export * from '@plvxn/tgraf-types/settings'
export * from '@plvxn/tgraf-types/update'

// telegraf input file definition
interface InputFileByPath {
  source: string
  filename?: string
}
interface InputFileByReadableStream {
  source: NodeJS.ReadableStream
  filename?: string
}
interface InputFileByBuffer {
  source: Buffer
  filename?: string
}
interface InputFileByURL {
  url: string
  filename?: string
}
export type InputFile =
  | InputFileByPath
  | InputFileByReadableStream
  | InputFileByBuffer
  | InputFileByURL

export type Telegram = Typegram.ApiMethods<InputFile>

export type Opts<M extends keyof Telegram> = Typegram.Opts<InputFile>[M]
export type InputMedia = Typegram.InputMedia<InputFile>
export type InputMediaPhoto = Typegram.InputMediaPhoto<InputFile>
export type InputMediaVideo = Typegram.InputMediaVideo<InputFile>
export type InputMediaAnimation = Typegram.InputMediaAnimation<InputFile>
export type InputMediaAudio = Typegram.InputMediaAudio<InputFile>
export type InputMediaDocument = Typegram.InputMediaDocument<InputFile>

// tiny helper types
export type ChatAction = Opts<'sendChatAction'>['action']

/**
 * Sending video notes by a URL is currently unsupported
 */
export type InputFileVideoNote = Exclude<InputFile, InputFileByURL>
