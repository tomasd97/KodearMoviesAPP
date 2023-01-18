import {PageContainer} from "../../components/pages-layout/styled-components";
import Section from "../../components/movies-section/section";
import {GetTopRatedMovies, GetPopularMovies, GetUpcomingMovies, SearchMovie} from "../../services/MoviesApi";
import {useMoviesContext} from "../../contexts/MoviesContext";

const MoviesPage = () => {
    const { searchWord } = useMoviesContext()
    return(
        <PageContainer>
            { !searchWord &&
               <>
                   <Section title={'Top rated movies'} queryUrl={GetTopRatedMovies} queryKey={'TopRatedMovies'}/>
                   <Section title={'Popular movies'} queryUrl={GetPopularMovies} queryKey={'PopularMovies'}/>
                   <Section title={'Upcoming movies'} queryUrl={GetUpcomingMovies} queryKey={'UpcomingMovies'}/>
               </>
            }
            {
                searchWord.length > 0 &&
                <Section title={'Resultados'} queryUrl={SearchMovie(searchWord)} queryKey={`SearchMovie-${searchWord}`}/>
            }
        </PageContainer>
    )
}

export default MoviesPage;
