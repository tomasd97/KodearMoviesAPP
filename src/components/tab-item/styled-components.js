import {styled} from "@mui/material/styles";

export const TabItemContainer = styled('div')(({ theme, ...props }) => ({
    display: 'flex',
    gap: 20,
    alignItems: 'center',
    color: props.selected ? theme.palette.layout.selected : theme.palette.layout.unselected,
    cursor: 'pointer',
    width: '100%',
    "&:hover": {
        color: theme.palette.layout.selected
    },
    userSelect: "none"
}));
