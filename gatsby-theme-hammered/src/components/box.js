import React from 'react'
import { Box } from 'theme-ui'

export const MyFirstComponent = ({ children }) => {
  return (
    <Box
      as="main"
      sx={{
        height: 150,
        width: 150,
        backgroundColor: 'primary',
      }}
    >
      {children}
    </Box>
  )
}
