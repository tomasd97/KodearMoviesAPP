import {useMoviesContext} from "../../contexts/MoviesContext";
import {PageContainer} from "../../components/pages-layout/styled-components";
import {Grid, Typography} from "@mui/material";
import MovieCard from "../../components/movie-card/movie-card";

const FavoritesPage = () => {
    const { favorites } = useMoviesContext();
    return(
        <PageContainer>
            {favorites.length > 0 &&
                <>
                    <Typography variant="sectionTitle">Favorites</Typography>
                    <Grid container spacing={2}>
                        {
                            favorites.map(favorite =>
                                <Grid item xs="auto" key={favorite.id}>
                                    <MovieCard movie={favorite}/>
                                </Grid>
                            )
                        }
                    </Grid>
                </>
            }
            {
                favorites.length === 0 && <Typography variant="sectionTitle">Your favorites list is empty</Typography>
            }
        </PageContainer>
    )
}

export default FavoritesPage;
