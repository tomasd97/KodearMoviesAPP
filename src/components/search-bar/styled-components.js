import {styled, alpha} from "@mui/material/styles";
import {TextField} from "@mui/material";

export const Search = styled(TextField)(({ theme }) => ({
    borderRadius: 22,
    ".MuiOutlinedInput-notchedOutline": {
        borderRadius: 28,
        border: `1px solid ${theme.palette.layout.lighter}`
    },
    maxWidth: 500,
    backgroundColor: alpha(theme.palette.layout.lighter, 0.1),
    "& .MuiOutlinedInput-root": {
        backgroundColor: 'transparent',
        fontSize: 18,
        fontWeight: 400,
        color: "#ffffff",
        padding: '5px 0px 5px 20px',
        fontFamily: "Inter, sans-serif"
    },
}));
