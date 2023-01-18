const API_KEY = process.env.REACT_APP_MOVIES_API_KEY
const API_URL = process.env.REACT_APP_MOVIES_API_URL;

export const GetTopRatedMovies = `${API_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`
export const GetPopularMovies = `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US`
export const GetUpcomingMovies = `${API_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US`
export const GetSimilarMovies = (movie_id) => {
    return(`${API_URL}/movie/${movie_id}/similar?api_key=${API_KEY}&language=en-US`)
}
export const SearchMovie = (word) => {
    return(
        `${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${word}`
    )
}

export const GetTopRatedSeries = `${API_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US`
export const GetPopularSeries = `${API_URL}/tv/popular?api_key=${API_KEY}&language=en-US`
export const SearchSeries = (word) => {
    return(
        `${API_URL}/search/tv?api_key=${API_KEY}&language=en-US&query=${word}`
    )
}

export const SearchSeriesAndMovies = (word) => {
    return(
        `${API_URL}/search/multi?api_key=${API_KEY}&language=en-US&query=${word}`
    )
}
