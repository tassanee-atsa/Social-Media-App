import React from 'react'
import { Box, Typography, useTheme, } from '@mui/material'
import Form from './Form'



const LoginPage = () => {
  const theme = useTheme()
  const toggleOne = theme.palette.neutral.toggleOne;
  const textColor = theme.palette.primary.main;
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={toggleOne}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color={textColor}>
          Connect+
        </Typography>
      </Box>
     
      <Box>
      <Form></Form>
      </Box>
    </Box>
  )
}

export default LoginPage
