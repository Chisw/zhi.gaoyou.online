export class UserOptions {
  punctuationVisible = true
  translationVisible = false
  pinyinVisible = false

  constructor(options?: Partial<UserOptions>) {
    if (options) {
      const {
        punctuationVisible,
        translationVisible,
        pinyinVisible,
      } = options

      this.punctuationVisible = punctuationVisible || true
      this.translationVisible = translationVisible || false
      this.pinyinVisible = pinyinVisible || false
    }
  }
}
