import { Box } from '@mui/material';
import { styled } from '@mui/system';

//Good if we reuse CSS set of properties as components : style component
const FlexBetween = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
})

export default FlexBetween;