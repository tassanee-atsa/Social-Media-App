import React from 'react'
import { Box } from '@mui/material'
import Navbar from '../navbar'

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)')
  const { _id, picturePath } = userSelector((state) => state.user)

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? 'flex' : 'block '}
        gap="0.5rem"
        justifyContent="space-between"
      >
        
      </Box>
    </Box>
  )
}

export default HomePage
