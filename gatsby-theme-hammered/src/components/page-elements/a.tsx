import React from 'react'
import { Box } from 'theme-ui'

export const A = ({ children }) => {
  return (
    <Box
      as="a"
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
