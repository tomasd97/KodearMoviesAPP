import {StyledRoot, StyledToolbar} from "./styled-components";
import {IconButton} from "@mui/material";
import Iconify from "../../components/iconify/iconify";
import SearchBar from "../../components/search-bar";
import {useLocation} from "react-router-dom";


const Header = ({ onOpenNav }) => {
    const location = useLocation()
    const disabledOn = ['/details', '/favorites'];
    return(
        <StyledRoot>
            <StyledToolbar>
                <IconButton
                    onClick={onOpenNav}
                    sx={{
                        mr: 1,
                        color: '#ffffff',
                        display: { lg: 'none' },
                    }}
                >
                    <Iconify icon="eva:menu-2-fill" />
                </IconButton>
                {
                    !disabledOn.includes(location.pathname) && <SearchBar/>
                }
            </StyledToolbar>
        </StyledRoot>
    )
}

export default Header;
