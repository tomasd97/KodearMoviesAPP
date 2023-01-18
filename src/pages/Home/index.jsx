import { PageContainer } from "../../components/pages-layout/styled-components";
import Section from "../../components/movies-section/section";
import {GetTopRatedMovies, SearchSeriesAndMovies} from "../../services/MoviesApi";
import {useMoviesContext} from "../../contexts/MoviesContext";

const HomePage = () => {
    const { searchWord } = useMoviesContext();
    return(
        <PageContainer>
            {
                !searchWord &&
                <>
                    <Section title={'Top rated movies'} queryUrl={GetTopRatedMovies} queryKey={'TopRatedMovies'}/>
                </>
            }
            {
                searchWord && <Section title={'Results'} queryUrl={SearchSeriesAndMovies(searchWord)} queryKey={`SearchMoviesAndSeries-${searchWord}`}/>
            }
        </PageContainer>
    )
}

export default HomePage;
