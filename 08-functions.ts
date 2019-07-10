{
  function add(num1: number, num2: number) {
    return num1 + num2
  }
  // Intellisense infer return type
  let z = add(5, 10)
  z = add(5, '10')

  // Explicitly type return value
  let concat = (str1: string, str2: string): string => {
    return str1 + str2
  }
  let w = concat('a', 'b')

  // optional parameters
  function sum(num1: number, num2?: number): number {
    if (num2) {
      return num1 + num2
    }
    return num1
  }
  sum(5)

  // default parameters
  function sum0(num1: number, num2: number = 0): number {
    if (num2) {
      return num1 + num2
    }
    return num1
  }
  sum0(5)

  // Additional types related to functions

  // void
  function log(message: string): void {
    console.log(message)
  }
  const voidValue = log('return should be void')

  // never
  function neverReturn(): never {
    throw new Error('nevers return')
  }
  const neverValue = neverReturn()
}
