{
  // Union Types
  const passport: number | string = '98456207'

  // Literal types
  const direction: 'N' | 'S' | 'W' | 'E' = 'N'

  // Type aliases
  type CardinalDirection = 'N' | 'S' | 'W' | 'E' // Could easily be a string enum
  const newDirection: CardinalDirection = 'E'

  type borderWidth =
    | number
    | 'thin'
    | 'medium'
    | 'thick'
    | 'initial'
    | 'inherit'

  // Intersect types
  interface IPerson {
    firstName: string
    lastName: string
  }
  interface ISuperHero {
    alias: string
    superpowers: string[]
    custome?: string
  }
  type SecretIdentity = IPerson & ISuperHero
  const flash: SecretIdentity = {
    alias: 'The Flash',
    firstName: 'Barry',
    lastName: 'Allen',
    superpowers: ['speed'],
  }

  // Partial
  function updateSecretIdentity(
    identity: SecretIdentity,
    updates: Partial<SecretIdentity>,
  ): SecretIdentity {
    return { ...identity, ...updates }
  }
  const thirdFlash = updateSecretIdentity(flash, {
    firstName: 'Wally',
    lastName: 'West',
  })

  // ReadOnly
  const lastFlash: Readonly<SecretIdentity> = updateSecretIdentity(flash, {
    firstName: 'Bart',
    lastName: 'Allen',
  })
  lastFlash.alias = 'Impulse'

  // Pick
  type SuperHeroPreview = Pick<
    SecretIdentity,
    'alias' | 'firstName' | 'lastName'
  >
  const wwPreview: SuperHeroPreview = {
    alias: 'Wonder Woman',
    firstName: 'Diana',
    lastName: 'Prince',
    superpowers: [],
  }

  // More on:
  // https://www.typescriptlang.org/docs/handbook/advanced-types.html
  // https://www.typescriptlang.org/docs/handbook/utility-types.html
}
