export const randomBackground = () => {
  const r = Math.floor(Math.random() * 255) + 1
  const g = Math.floor(Math.random() * 255) + 1
  const b = Math.floor(Math.random() * 255) + 1
  const a = Math.floor(Math.random()) + 1
  return `rgba(${r},${g},${b},${a})`
}