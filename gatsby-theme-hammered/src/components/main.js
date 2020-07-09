import React from 'react'
import { MyFirstComponent } from './box'

export const Thing = ({ children }) => {
  return (
    <>
      <MyFirstComponent>{children}</MyFirstComponent>
    </>
  )
}
