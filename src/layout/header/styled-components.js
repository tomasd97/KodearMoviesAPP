import {AppBar, Toolbar} from "@mui/material";
import {styled} from "@mui/material/styles";

const NAV_WIDTH = 280;
const HEADER_MOBILE = 64;
const HEADER_DESKTOP = 92;

export const StyledRoot = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.layout.main,
    boxShadow: '1px 1px 4px 2px rgba(0,0,0,0.2);',
    [theme.breakpoints.up('lg')]: {
        width: `calc(100% - ${NAV_WIDTH - 1}px)`,
    },
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    minHeight: HEADER_MOBILE,
    [theme.breakpoints.up('lg')]: {
        minHeight: HEADER_DESKTOP,
        padding: theme.spacing(0, 5),
    },
}));
