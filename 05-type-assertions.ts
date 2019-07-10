{
  // type assertions (casting)
  let message: any = 'This should be a string'
  let messageString: string = message as string
  let anotherWay: string = <string>message
}
