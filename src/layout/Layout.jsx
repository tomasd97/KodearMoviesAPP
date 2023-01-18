import { useState } from "react";
import { Main, StyledRoot } from "./styled-components";
import { Outlet } from 'react-router-dom';
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

const Layout = () => {
    const [open, setOpen] = useState(false);
    return(
        <StyledRoot>
            <Header onOpenNav={() => setOpen(true)}/>
            <Sidebar openNav={open} onCloseNav={() => setOpen(false)}/>
            <Main>
                <Outlet/>
            </Main>
        </StyledRoot>
    )
}

export default Layout;
