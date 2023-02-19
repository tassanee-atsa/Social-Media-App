import React from 'react'

import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'

const LoginPage = () => {
  const theme = useTheme
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)')
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeigh="bold" fontSize="32px" color="primary">
          Friendpage
        </Typography>
      </Box>
    </Box>
  )
}

export default LoginPage
