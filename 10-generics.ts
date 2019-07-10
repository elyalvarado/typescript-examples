{
  let arrayOfStrings: Array<string> = ['1', '2', '3']
  let arrayOfNumbers: Array<number> = [1, 2, 3]

  let secretIdentities: Set<ISecretIdentity> = new Set([
    { firstName: 'Diana', lastName: 'Prince', superHero: 'Wonder Woman' },
    { firstName: 'Bruce', lastName: 'Wayne', superHero: 'Batman' },
    { firstName: 'Clark', lastName: 'Kent', superHero: 'Superman' },
  ])

  function identity<T>(item: T): T {
    return item
  }
  let x = identity<number>('test')
  let y = identity<number>(42)
  let z = identity(true)

  function firstElement<T>(list: Array<T>): T {
    return list[0]
  }
  const firstNumber = firstElement(arrayOfNumbers)
  let firstString = firstElement<string>(arrayOfNumbers)
  firstString = firstElement<string>(arrayOfStrings)
}
