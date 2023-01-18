import Section from "../../components/movies-section/section";
import {
    GetPopularSeries,
    GetTopRatedSeries, SearchSeries,
} from "../../services/MoviesApi";
import {PageContainer} from "../../components/pages-layout/styled-components";
import {useMoviesContext} from "../../contexts/MoviesContext";

const SeriesPage = () => {
    const { searchWord } = useMoviesContext();
    return(
        <PageContainer>
            {
                !searchWord &&
                    <>
                        <Section title={'Top rated TV shows'} queryUrl={GetTopRatedSeries} queryKey={'TopRatedTVShows'}/>
                        <Section title={'Popular TV shows'} queryUrl={GetPopularSeries} queryKey={'PopularTVShows'}/>
                    </>
            }
            {
                searchWord && <Section title={'Series'} queryKey={`SearchSeries-${searchWord}`} queryUrl={SearchSeries(searchWord)}/>
            }
        </PageContainer>
    )
}

export default SeriesPage;
