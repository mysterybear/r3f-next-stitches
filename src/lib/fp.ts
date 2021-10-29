export const pipeLog = <T extends unknown>(x: T): T => {
  console.log(x)
  return x
}
