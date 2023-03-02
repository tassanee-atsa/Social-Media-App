import React from 'react'
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import Form from './Form'



const LoginPage = () => {
  const theme = useTheme()
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)')
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.light}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="#006B7D">
          Friendpage
        </Typography>
      </Box>
      <Box
        width= {isNonMobileScreens ? '50%' : '93%'}
        p='2rem'  
        m='2rem auto'
        borderRadius= '1.5rem'
        backgroundColor= {theme.palette.background.light}
        >
        <Typography fontWeight= '500' variant= 'h5' sx={{ mb: '1.5rem'}}>
        Welcome to FriendPage. Start your social network here.
        </Typography> 
      </Box>
      <Box>
      <Form></Form>
      </Box>
    </Box>
  )
}

export default LoginPage
