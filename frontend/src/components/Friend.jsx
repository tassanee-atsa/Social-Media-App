import React from 'react'
import { PersonAddOutlined, PersonRemoveOutlined } from '@mui/icons-material'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { useDiapatch, useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setFriends } from '../state'
import FlexBetween from './FlexBetween'
import UserImage from './UserImage'

const Friend = ({ friendId, name, subtitle, userPicturePath }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state) => state.user)
  const token = useSelector((state) => state.token)
  const friends = useSelector((state) => state.user.friends)

  const { palette } = useTheme()
  const primaryLight = palette.primary.light
  const primaryDark = palette.primary.dark
  const main = palette.neutral.main
  const medium = palette.neutral.medium

  const isFriend = friends.find((friend) => friend._id === friendId)

  const patchFriend = async () => {
    const response = await fetch(`http://localhost:3001/`, {
        methods: 'PATCH',
        header: { Authorisation: `Bearer ${token}`}
    })
  }
}


export default Friend;
