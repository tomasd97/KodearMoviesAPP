import {styled} from "@mui/material/styles";

export const SidebarContainer = styled('div')(({ theme }) => ({
    height: '100vh',
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '30vh'
}));

export const TabsContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    alignItems: 'flex-start',
    width: '100%'
}));

