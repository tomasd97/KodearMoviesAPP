import { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Link } from '@mui/material';

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {
    const logo = (
        <Box
            ref={ref}
            component="div"
            sx={{
                width: 40,
                height: 40,
                display: 'inline-flex',
                ...sx,
            }}
            {...other}
        >
            <img src={'/assets/Kodear.jpg'} alt='kodear' width={40} height={40}/>
        </Box>
    );

    if (disabledLink) {
        return <>{logo}</>;
    }

    return (
        <Link to="/" component={RouterLink} sx={{ display: 'contents' }}>
            {logo}
        </Link>
    );
});

export default Logo;
