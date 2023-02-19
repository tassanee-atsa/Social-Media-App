import  { useState } from 'react';
import {
    Box,
    Button,
    TextField,
    useMediaQuery,
    Typography,
    useTheme
} from '@mui/material'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Formik } from 'formik'; // Form library
import * as yup from 'yup'; // Form validation library
import { useNavigate } from 'react-router-dom'; 
import { useDispatch } from 'react-redux'; //To store user information
import { setLogin } from 'state';
import DropZone from 'react-dropZone'; // For dropping the files, let the user put the image, to upload the files.
import Flexbetween from 'components/FlexBetween';
