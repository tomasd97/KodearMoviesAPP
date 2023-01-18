import MovieCard from "../movie-card/movie-card";
import { useQuery } from "react-query";
import {Grid, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import useResponsive from "../../hooks/useResponsive";
import Loader from "../loader/loader";

const Section = ({ title, queryUrl, queryKey }) => {
    const { isLoading, data } = useQuery(queryKey, () =>
        fetch(`${queryUrl}&page=1`).then(res =>
            res.json()
        ))
    const isMobile = useResponsive('down', 'sm');
    return(
        <SectionContainer>
            {
                isLoading && <Loader/>
            }
            {
                data?.results.length > 0 &&
                <>
                    <Typography variant='sectionTitle'>
                        {title}
                    </Typography>
                    <Grid container spacing={2} justifyContent={isMobile ? "center" : "flex-start"}>
                        {
                            data.results.map(movie =>
                                <Grid item xs="auto" key={movie.id} >
                                    <MovieCard movie={movie}/>
                                </Grid>
                            )
                        }
                    </Grid>
                </>
            }
        </SectionContainer>
    )
}

export default Section;

export const SectionContainer = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: 10
}));
