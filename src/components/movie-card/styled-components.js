import {styled} from "@mui/material/styles";

export const Image = styled('img')(({ theme, ...props }) => ({
    width: '100%',
    height: '100%'
}));

export const MovieCardContainer = styled('div')(({ theme, ...props }) => ({
    cursor: 'pointer',
    height: 150,
}));
