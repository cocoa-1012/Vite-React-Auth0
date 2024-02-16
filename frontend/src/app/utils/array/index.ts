export const toListString = (input: string[], {
  conjunction = 'and',
  oxfordComma = true,
} = {}): string => input.length < 3 ? input.join(` ${conjunction} `) : [
  input.slice(0, -1).join(', '),
  input.slice(-1),
].join(`${oxfordComma ? ',' : ''} ${conjunction} `)

export const ifEmptyThenUndefined = <T = unknown>(...arrays: (T[]|undefined|null)[]): T[]|undefined => {
  const totalLength = arrays.reduce((acc, array) => acc + (array || []).length, 0)

  if (!totalLength) {
    return undefined
  }

  return Array.prototype.concat(...arrays.map(array => array || []))
}
