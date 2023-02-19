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
import Dropzone from 'react-dropzone'; // For dropping the files, let the user put the image, to upload the files.
import Flexbetween from 'components/FlexBetween';

//Form validation
const registerSchema = yup.object().shape({
    firstName: yup.string().required('required'),
    lastName: yup.string().required('required'),
    email: yup.string().email('invalid email').required('required'),
    password: yup.string().required('required'),
    location: yup.string().required('required'),
    occupation: yup.string().required('required'),
    picture: yup.string().required('required')
});

const loginSchema = yup.object().shape({
    email: yup.string().email('invalid email').required('required'),
    password: yup.string().required('required'),
});

const initialValuesRegister = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    location: '',
    occupation: '',
    picture: '',
}

const initialValuesLogin = {
    email: '',
    password: '',
};


