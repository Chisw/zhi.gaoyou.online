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