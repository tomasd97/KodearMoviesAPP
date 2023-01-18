import { IconButton, InputBase, Paper } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {useMoviesContext} from "../../contexts/MoviesContext";

const SearchBar = () => {
    const { searchWord, changeSearchWord } = useMoviesContext()
    return(
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 600 }}
        >
            <IconButton sx={{ p: '10px' }} aria-label="menu">
                <MenuIcon />
            </IconButton>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search movies or TV shows"
                value={searchWord}
                onChange={(e) => changeSearchWord(e.target.value)}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}

export default SearchBar;
