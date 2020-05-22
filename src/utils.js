let G = null
typeof window !== 'undefined' && (G = window)

export const copy = (str) => {
  const input = document.createElement('input')
  document.body.appendChild(input)
  input.value = str
  input.select()
  document.execCommand('Copy')
  document.body.removeChild(input)
}

export const SUPPORT = {
  BackdropFilter: G && G.CSS.supports('backdrop-filter', 'blur(0)'),
}

export const userOption = {
  defaultOptions: {
    Z_DJ: true,
    Z_YW: false,
    Z_PY: false,
  },
  save(jsonObj) {
    localStorage.setItem('USER_OPTIONS', JSON.stringify(jsonObj))
  },
  init() {
    this.save(this.defaultOptions)
  },
  get() {
    const existJSONString = localStorage.getItem('USER_OPTIONS')
    if (existJSONString) {
      return JSON.parse(existJSONString)
    } else {
      this.init()
      return this.defaultOptions
    }
  },
  set(option) {
    const oldOptions = this.get()
    const newOptions = Object.assign(
      oldOptions,
      option
    )
    this.save(newOptions)
  },
}