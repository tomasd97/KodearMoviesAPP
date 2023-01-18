import {useLocation, useNavigate} from "react-router-dom";
import {Typography} from "@mui/material";
import {DetailsContainer, FavoriteButtonContainer, Genres, Image, VotesSection, CardHeader} from "./styled-components";
import RenderVoteIcon from "../../constants/votes_icons";
import {GET_GENRE} from "../../constants/genres";
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useMoviesContext} from "../../contexts/MoviesContext";
import Section from "../../components/movies-section/section";
import {GetSimilarMovies} from "../../services/MoviesApi";
import Loader from "../../components/loader/loader";
import {useEffect} from "react";

const DetailsPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    let state = location.state;
    const { isInFavorites, handleFavorite } = useMoviesContext()
    const { backdrop_path, vote_average, overview, genre_ids, id } = state;
    useEffect(() => {
        if(!state){
            navigate('')
        }
    }, [navigate, state])
    return(
        <div style={{ display: 'flex', flexDirection: 'column', gap: 50 }}>
            <DetailsContainer>
                <Image
                    src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
                    onLoad={() => <Loader/>}
                />
                <CardHeader>
                    <Typography variant="movieTitle">{state?.title ?? state.name} ({state.release_date ? state.release_date.split('-')[0] : state.first_air_date.split('-')[0]} )</Typography>
                    <VotesSection>
                        <Typography color={`votes.${state.vote_average.toFixed(0)}`}>{vote_average}</Typography>
                        <RenderVoteIcon vote={vote_average}/>
                    </VotesSection>
                </CardHeader>
                <Typography variant="resume">
                    {overview}
                </Typography>
                <Genres>
                    {
                        genre_ids.map(
                            genre_id =>
                                <Typography key={genre_id} variant="genre">{GET_GENRE(genre_id)}</Typography>
                        )
                    }
                </Genres>
                <FavoriteButtonContainer onClick={() => handleFavorite(state)}>
                    <FavoriteIcon style={{ fill: isInFavorites(id) ? 'red' : 'transparent', stroke: 'black' }}/>
                </FavoriteButtonContainer>
            </DetailsContainer>
            <Section queryKey='similarMovies' title='Similar movies' queryUrl={GetSimilarMovies(id)}/>
        </div>
    )
}

export default DetailsPage;
