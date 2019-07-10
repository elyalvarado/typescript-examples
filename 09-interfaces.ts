function fullName(person: { firstName: string; lastName: string }) {
  return `${person.firstName} ${person.lastName}`
}
const bruce = {
  firstName: 'Bruce',
  lastName: 'Wayne',
  ocupation: 'Millionaire',
}
fullName(bruce)

// Interfaces
interface IPerson {
  firstName: string
  lastName: string
}
function fullNameWI(person: IPerson) {
  return `${person.firstName} ${person.lastName}`
}
const clark: IPerson = {
  firstName: 'Clark',
  lastName: 'Kent',
  ocupation: 'Reporter',
}
fullNameWI(clark)

// Optional properties
interface IProfile {
  firstName: string
  lastName: string
  age?: number
  ocupation?: string
}
const diana: IProfile = {
  firstName: 'Diana',
  lastName: 'Prince',
}
fullNameWI(diana)

// extending interfaces
interface ISecretIdentity extends IProfile {
  superHero: string
}
const arthur: ISecretIdentity = {
  firstName: 'Arthur',
  lastName: 'Curry',
  superHero: 'Aquaman',
}

// interface properties can also be functions
// A Functor is any data type that defines how fmap applies to it
interface IFunctor {
  fmap: (args: any) => IFunctor
}
