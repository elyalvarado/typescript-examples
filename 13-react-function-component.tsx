import React from 'react'

interface IHelloProps {
  name?: string
}

const Hello: React.FC<IHelloProps> = ({ name, notExisting }) => (
  <div>Hello {name}!</div>
)
Hello.defaultProps = {
  name: 'Unknown Person',
  test: 'x',
}
