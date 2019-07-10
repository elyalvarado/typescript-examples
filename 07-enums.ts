{
  // Enums
  enum Colors {
    Red,
    Blue,
    Green,
  }
  let c: Colors = Colors.Red
  console.log('Red is ', c.valueOf())

  // specify initial numeric value
  enum HTMLResponseCodes {
    Continue = 100,
    SwitchingProtocol,
    Processing,
    OK = 200,
    Created,
    Accepted,
  }
  console.log('Continue ', HTMLResponseCodes.Continue)
  console.log('Accepted ', HTMLResponseCodes.Accepted)

  // specify string values
  enum MediaTypes {
    JSON = 'application/json',
    XML = 'application/xml',
  }
}
