import React, { useState } from 'react'
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import {
  DarkMode,
  LightMode,
  Menu,
  Close,
} from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { setMode, setLogout } from '../../state'
import { useNavigate } from 'react-router-dom'
import FlexBetween from '../../components/FlexBetween'

const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false) //Use this value to determine if we want to open up
  //the menu in a small screen. We use this to toggle on and off.
  const dispatch = useDispatch() //useDispatch action from the reducer.
  const navigate = useNavigate()
  const user = useSelector((state) => state.user) // To grab a user information
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px') // The hook build in from MUI that determine of the user
  //screen size. To check if it is below or higher than the minimum width.
  const theme = useTheme()
  const neutrallight = theme.palette.neutral.light
  const dark = theme.palette.neutral.dark
  const background = theme.palette.background.default
  const primaryLight = theme.palette.primary.light
  const toggleOne = theme.palette.neutral.toggleOne



const fullName = `${user.firstName} ${user.lastName}`
const firstName = `${user.firstName}`;
  // Only available to the box component
  return (
    <FlexBetween padding="1rem 6%" backgroundColor={toggleOne}>
      <FlexBetween gap="2.5rem">
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 2rem, 2.25rem)" // 1rem is a minimum value for the font if screen size is too small,
          // 2.25 is max if screen size is too big, 2rem is a preferred value
          color="primary"
          onClick={() => navigate('/home')}
          sx={{
            '&: hover': {
              color: primaryLight,
              cursor: 'pointer',
            },
          }}
        >
        Connect+
        </Typography>
        {/* {isNonMobileScreens && (
          <FlexBetween
            backgroundColor={neutrallight}
            borderRadius="9px"
            // gap="3rem"
            padding="0.1rem 1.5rem" //Short-hand for 0.1 top and buttom, 1.5rem for right and left.
          >
            <InputBase placeholder="Search..." >
              <Search />
            </InputBase>
          </FlexBetween>
        )} */}
      </FlexBetween>

      {/* DESKTOP NAV */}
      {isNonMobileScreens ? (
        <FlexBetween gap="2rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === 'dark' ? (
              <DarkMode sx={{ fontSize: '25px' }} />
            ) : (
              <LightMode sx={{ color: dark, fontSize: '25px' }} />
            )}
          </IconButton>
          
          {/* We can see the user log in and log out. */}
          <FormControl variant="standard" value={firstName}>
            <Select
              value={firstName}
              sx={{
                backgoundColor: neutrallight,
                width: '150px',
                borderRadius: '0.25rem',
                p: '0.25rem 1rem',
                '& .MuiSvgIcon-root': {
                  pr: '0.25rem',
                  width: '3rem',
                },
                '& .MuiSelect-select:focus': {
                  backgroundColor: neutrallight,
                },
              }}
              input={<InputBase />}
            >
              <MenuItem value={firstName}>
                <Typography>{firstName}</Typography>
              </MenuItem>
              <MenuItem onClick={() => dispatch(setLogout())}>Log Out</MenuItem>
            </Select>
          </FormControl>
        </FlexBetween>
      ) : (
        <IconButton
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        >
          <Menu />
        </IconButton>
      )}

      {/* MOBILE NAV */}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10" //In front of everthing
          maxWidth="500px"
          minWidth="300px"
          background={background}
        >
          {/* CLOSE ICON */}
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
              >
              <Close />
            </IconButton>
          </Box>

          {/* MENU ITEMS */}
          <FlexBetween
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="3rem"
          >
            <IconButton onClick={() => dispatch(setMode())} sx= {{ fontSize: '25px' }}>
              {theme.palette.mode === 'dark' ? (
                <DarkMode sx={{ fontSize: '25px' }} />
              ) : (
                <LightMode sx={{ color: dark, fontSize: '25px' }} />
              )}
            </IconButton>
            {/* We can see the user log in and log out. */}
            <FormControl variant="standard" value={fullName}>
              <Select
                value={firstName}
                sx={{
                  backgoundColor: neutrallight,
                  width: '150px',
                  borderRadius: '0.25rem',
                  p: '0.25rem 1rem',
                  '& .MuiSvgIcon-root': {
                    pr: '0.25rem',
                    width: '3rem',
                  },
                  '& .MuiSelect-select:focus': {
                    backgroundColor: neutrallight,
                  },
                }}
                input={<InputBase />}
              >
                <MenuItem value={firstName}>
                  <Typography>{firstName}</Typography>
                </MenuItem>
                <MenuItem onClick={() => dispatch(setLogout())}>
                  Log Out
                </MenuItem>
              </Select>
            </FormControl>
          </FlexBetween>
        </Box>
      )}
    </FlexBetween>
  )
}

export default Navbar
