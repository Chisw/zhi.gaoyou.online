export const line = (str: string) => str
  .replace(/\n/g, ' ')
  .replace(/\s+/g, ' ')
  .trim()

export const copy = (str: string) => {
  const el = document.createElement('textarea')
  document.body.appendChild(el)
  el.value = str
  el.select()
  document.execCommand('Copy')
  document.body.removeChild(el)
}
