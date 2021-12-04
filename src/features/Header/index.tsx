import React from 'react'
import { useAppDispatch, useAppSelector } from '../../helpers/hooks/redux'

const Header: React.FunctionComponent<{
  title: string
}> = ({ title }): JSX.Element => {
  const menuList = useAppSelector((state) => state.header.menuList)
  // const dispatch = useAppDispatch()

  return (
    <header className="bg-gray-600">
      <div className="container flex justify-between items-center mx-auto h-16">
        <div id="logo">
          <p className="font-bold text-lg">{title}</p>
        </div>
        <div id="menu">
          <ul className="flex space-x-4">
            {menuList.map((item: string) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
