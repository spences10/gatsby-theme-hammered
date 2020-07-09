import React from 'react'
import { Box } from 'theme-ui'

export const MyFirstComponent = ({ children }) => {
  return (
    <Box
      as="main"
      sx={{
        height: 300,
        width: 300,
        backgroundColor: 'primary',
      }}
    >
      {children}
    </Box>
  )
}
