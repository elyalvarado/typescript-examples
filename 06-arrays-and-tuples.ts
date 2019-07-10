{
  // Arrays
  let array1: number[] = [1, 2, 3]
  let array2: Array<string> = ['1', '2', '3']

  array1.push(4)
  array2.push(4)

  // Tuples
  // exact number of values
  let person1: [string, number, boolean] = ['Chris', 23, true]
  let person2: [string, number, boolean] = ['Gaby', '35', 'yes']
  let person3: [string, number, boolean] = ['Grecia', -0.2, undefined, true]

  person1[2] = 'x'
}
