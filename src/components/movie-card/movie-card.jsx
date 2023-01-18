import {
    Image, MovieCardContainer,
} from "./styled-components";
import {useNavigate} from "react-router-dom";

const MovieCard = ({ movie }) => {
    const { poster_path } = movie;
    const navigate = useNavigate();
    return(
       <MovieCardContainer onClick={() => navigate(`/details`, {state: movie})}>
           <Image
               src={`https://image.tmdb.org/t/p/original/${poster_path}`}
               onError={({ currentTarget }) => {
                   currentTarget.onerror = null;
                   currentTarget.src="/assets/default.jpg";
               }}
           />
       </MovieCardContainer>
    );
}

export default MovieCard;
