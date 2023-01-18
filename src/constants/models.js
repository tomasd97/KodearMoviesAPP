const MOVIE = {
    title: 'title',
    release_date: 'release_date',
    image: 'backdrop_path',
    overview: 'overview',
    genre_ids: 'genre_ids',
    id: 'id'
}

const SERIE = {
    title: 'name',
    release_date: 'first_air_date',
    image: 'backdrop_path',
    overview: 'overview',
    genre_ids: 'genre_ids',
    id: 'id'
}

export const TYPE_ATTRIBUTES = (is_serie) => {
    return is_serie ? SERIE : MOVIE
}
