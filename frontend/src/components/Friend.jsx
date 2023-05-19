import React from 'react'
import { PersonAddOutlined, PersonRemoveOutlined } from '@mui/icons-material'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setFriends } from '../state'
import FlexBetween from './FlexBetween'
import UserImage from './UserImage'

const Friend = ({ friendId, name, subtitle, userPicturePath }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { _id } = useSelector((state) => state.user)
  const token = useSelector((state) => state.token)
  const friends = useSelector((state) => state.user.friends)

  const { palette } = useTheme()
  const primaryLight = palette.primary.light
  const primaryDark = palette.primary.dark
  const toggleThree = palette.neutral.toggleThree


  const isFriend = friends.find((friend) => friend._id === friendId);

  

  const patchFriend = async () => {
    const response = await fetch(
      `http://localhost:3001/users/${_id}/${friendId}`,
      {
        method: 'PATCH',
        headers: {
          Authorisation: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    )
    const data = await response.json()
    dispatch(setFriends({ friends: data }))
  }

  return (
    <FlexBetween>
      <FlexBetween gap="1rem">
        <UserImage image={userPicturePath} size="55px" />
        <Box
          onClick={() => {
            navigate(`/profile/${friendId}`)
            navigate(0) //to refresh the page when component was not re-render on friend profile page
          }}
        >
          <Typography
            color={toggleThree}
            variant="h6"
            fontWeight="500"
            sx={{
              '&:hover': {
                color: palette.primary.light,
                cusor: 'pointer',
              },
            }}
          >
            {name}
          </Typography>
          <Typography color={toggleThree} fontSize="0.75rem">
            {subtitle}
          </Typography>
        </Box>
      </FlexBetween>
      <IconButton
        onClick={() => patchFriend()}
        sx={{ backgroundColor: primaryLight, p: '0.6rem' }}
      >
        {isFriend ? (
          <PersonRemoveOutlined sx={{ color: primaryDark }} />
        ) : (
          <PersonAddOutlined sx={{ color: primaryDark }} />
        )}
      </IconButton>
    </FlexBetween>
  )
}

export default Friend
