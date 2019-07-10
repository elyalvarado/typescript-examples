{
  let name: string = ''
  let age: number = 20
  let developer: boolean = true

  name = 20
  age = '20'
  developer = 20

  let undefinedVar: undefined = undefined
  let nullVar: null = null

  undefinedVar = 5
  nullVar = 'test'

  // null & undefined are defined as subtypes of all other types
  // (except if strictNullChecks is enabled, which you should do)
  name = undefined
  age = null
}
