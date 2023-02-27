import React from 'react'
import {
  EditOutlined,
  DeleteOutlined,
  AttachFileOutlined,
  AttachFileOutlined,
  GifBoxOutlined,
  ImageOutlined,
  MicOutlined,
  MoreHorizOutlined,
} from '@mui/icons-material'
import {
  Box,
  Divider,
  Typography,
  InputBase,
  useTheme,
  Button,
  IconButton,
  useMediaQuery,
} from '@mui/icons-material'
import FlexBetween from '../../components/FlexBetween';
import Dropzone from 'react-dropzone';
import UserImage from '../../components/UserImage';
import WidgetWrapper from '../../components/WidgetWrapper';
import { useState } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { serPosts } from 'state';

const MyPostWidget = ({ picturePath }) => {
    const dispatch = useDispatch();
    const [isImage, setIsImage] = useState(false);
    const [image, setImage] = useState(null);
    const [post, setPost] = useState('');
    const { palellte } = useTheme();
    const { _id } = useSelector((state)=> state.user);
    const token = useSelector((state) => state.token);
    


}