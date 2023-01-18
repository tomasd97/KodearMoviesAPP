import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TvIcon from '@mui/icons-material/Tv';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';

const SideTabs = [
    {
        title: 'Movies',
        path: '/movies',
        icon: MovieOutlinedIcon,
        id: 1
    },
    {
        title: 'TV shows',
        path: '/series',
        icon: TvIcon,
        id: 2
    },
    {
        title: 'Favorites',
        path: '/favorites',
        icon: FavoriteBorderIcon,
        id: 3
    },
];

export default SideTabs;
