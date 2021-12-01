import React from 'react'

const Header: React.FC<{
  title: string
}> = ({ title }): JSX.Element => {
  return <div className="h-24 bg-gray-600">{title}</div>
}

export default Header
