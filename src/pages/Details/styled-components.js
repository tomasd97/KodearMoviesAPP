import {styled} from "@mui/material/styles";
import {Card} from "@mui/material";


export const DetailsContainer = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.layout.light,
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    alignItems: 'center',
}));

export const CardHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    gap: 20,
    alignItems: 'center'
}));

export const Image = styled('img')(({ theme }) => ({
    height: 400
}));


export const VotesSection = styled('div')(({ theme }) => ({
    display: 'flex',
    gap: 5,
    alignItems: 'center',
}));

export const FavoriteButtonContainer = styled('div')(({ theme }) => ({
    width: 'max-content',
    height: 'max-content',
    cursor: 'pointer'
}));

export const Genres = styled('div')(({ theme }) => ({
    display: 'flex',
    gap: 10,
    alignItems: 'center'
}));
