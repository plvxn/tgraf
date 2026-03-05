declare module 'abort-controller' {
  export interface AbortSignal {
    readonly aborted: boolean
    readonly reason?: unknown
  }
  export default class AbortController {
    readonly signal: AbortSignal
    abort(reason?: unknown): void
  }
}
