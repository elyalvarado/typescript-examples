{
  // type any
  let randomValue: any = 10
  randomValue = 'x'
  randomValue = { x: 1 }
  randomValue = true

  // Disables all checks
  randomValue()
  new randomValue()
  randomValue.unexistingProperty
  randomValue.unexistingMethod()

  // TS > 3.0 unknown
  let randomValueU: unknown = 10
  randomValueU = 'x'
  randomValueU = { x: 1 }
  randomValueU = true
  // Disables calling it
  randomValueU()
  // Disables calling it as constructor
  new randomValueU()
  // Disables property access
  randomValueU.unexistingProperty
}
