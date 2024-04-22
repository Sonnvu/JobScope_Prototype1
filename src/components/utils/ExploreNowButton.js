import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const CustomButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: '#4592ea',
    '&:hover': {
        backgroundColor: '#276ab7',
    },
}));

const ExploreNowButton = ({ children, ...props }) => (
    <CustomButton
        {...props}
        endIcon={<ArrowForwardIcon />} // Use startIcon or endIcon to place the icon
        sx = {{ pl: 6, pr: 6, pt: 2, pb: 2, borderRadius: 7 }}
    >
        {children}
    </CustomButton>
);

export default ExploreNowButton;