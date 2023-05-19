import React from 'react'
import {
  EditOutlined,
  DeleteOutlined,
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
} from '@mui/material'
import FlexBetween from '../../components/FlexBetween'
import Dropzone from 'react-dropzone'
import UserImage from '../../components/UserImage'
import WidgetWrapper from '../../components/WidgetWrapper'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPosts } from '../../state'

const MyPostWidget = ({ picturePath }) => {
  const dispatch = useDispatch()
  const [isImage, setIsImage] = useState(false) //switch the state when a user clicks on an option to drop an image.
  const [image, setImage] = useState(null) // actual image when user drop an image.
  const [post, setPost] = useState('') //The actual post content
  const { palette } = useTheme()
  const { _id } = useSelector((state) => state.user)
  const token = useSelector((state) => state.token)
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)')
  const medium = palette.neutral.medium
  const toggleTextGrey = palette.neutral.toggleTextGrey


  const handlePost = async () => {
    const formData = new FormData();
    formData.append('userId', _id);
    formData.append('description', post);
    if (image) {
      formData.append('picture', image);
      formData.append('picturePath', image.name)
    }

    const response = await fetch(`http://localhost:3001/posts`, {
      method: 'POST',
      headers: { Authorisation: `Bearer ${token}` },
      body: formData,
    })
    const posts = await response.json();
    dispatch(setPosts({ posts }))//To keep the list of posts
    setImage(null) //reset all the state after the api is called.
    setPost('')
  }

  return (
    <WidgetWrapper>
      <FlexBetween gap="1.5rem">
        <UserImage image={picturePath} />
        <InputBase
          placeholder="  What is in your mind..."
          onChange={(e) => setPost(e.target.value)}
          value={post}
          sx={{
            width: '100%',
            backgroundColor: palette.neutral.light,
            borderRadius: '2rem',
            padding: '1rem 2 rem',
          }}
        />
      </FlexBetween>
      {isImage && (
        <Box
          border={`1px solid ${medium}`}
          borderRadius="5px"
          mt="1rem"
          p="1rem"
        >
          <Dropzone
            acceptedFiles=".jpg, .jpeg, .png"
            multiple={false}
            onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
          >
            {({ getRootProps, getInputProps }) => (
              <FlexBetween>
                <Box
                  {...getRootProps()}
                  border={`2px dashed ${palette.primary.main}`}
                  p="1rem"
                  width="100%"
                  sx={{ '&:hover': { cusor: 'pointer' } }}
                >
                  <input {...getInputProps()} />
                  {!image ? (
                    <p>Add Image Here</p>
                  ) : (
                    <FlexBetween>
                      <Typography>{image.name}</Typography>
                      <EditOutlined />
                    </FlexBetween>
                  )}
                </Box>
                {image && (
                  <IconButton
                    onClick={() => setImage(null)}
                    sx={{ width: '15%' }}
                  >
                    <DeleteOutlined />
                  </IconButton>
                )}
              </FlexBetween>
            )}
          </Dropzone>
        </Box>
      )}

      <Divider sx={{ margin: '1.25rem 0' }} />

      <FlexBetween>
        {/* turn off and open image dropzone */}
        <FlexBetween gap="0.25rem" onClick={() => setIsImage(!isImage)}>
          <ImageOutlined sx={{ color:toggleTextGrey }} />
          <Typography
            color={toggleTextGrey}
            sx={{ '& : hover': { cusor: 'pointer', color: medium } }}
          >
            Image
          </Typography>
        </FlexBetween>

        {/* {isNonMobileScreens ? (
          <>
            <FlexBetween gap="0.25">
              <GifBoxOutlined sx={{ color: mediumMain }} />
              <Typography color={mediumMain}>Clip</Typography>
            </FlexBetween>

            <FlexBetween gap="0.25">
              <AttachFileOutlined sx={{ color: mediumMain }} />
              <Typography color={mediumMain}>Attachment</Typography>
            </FlexBetween>

            <FlexBetween gap="0.25">
              <MicOutlined sx={{ color: mediumMain }} />
              <Typography color={mediumMain}>Audio</Typography>
            </FlexBetween>
          </>
        ) : (
          <FlexBetween gap="0.25rem">
            <MoreHorizOutlined sx={{ color: mediumMain }} />
          </FlexBetween>
        )} */}

        <Button
          disabled={!post}
          onClick={handlePost}
          sx={{
            color: palette.neutral.toggleTwo,
            fontWeight: 'bold',
            backgroundColor: palette.background.light,
            borderRadius: '3rem',
          }}
        >
          POST
        </Button>
      </FlexBetween>
    </WidgetWrapper>
  )
}

export default MyPostWidget;
