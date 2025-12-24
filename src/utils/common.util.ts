let G = null
typeof window !== 'undefined' && (G = window)

export const copy = (str: string) => {
  const input = document.createElement('input')
  document.body.appendChild(input)
  input.value = str
  input.select()
  document.execCommand('Copy')
  document.body.removeChild(input)
}

export const userOption = {
  defaultOptions: {
    Z_DJ: true,
    Z_YW: false,
    Z_PY: false,
  },
  save(jsonObj: any) {
    G && G.localStorage.setItem('USER_OPTIONS', JSON.stringify(jsonObj))
  },
  init() {
    this.save(this.defaultOptions)
  },
  get() {
    const existJSONString = G && G.localStorage.getItem('USER_OPTIONS')
    if (existJSONString) {
      return JSON.parse(existJSONString)
    } else {
      this.init()
      return this.defaultOptions
    }
  },
  set(option: any) {
    const oldOptions = this.get()
    const newOptions = Object.assign(
      oldOptions,
      option
    )
    this.save(newOptions)
  },
}
