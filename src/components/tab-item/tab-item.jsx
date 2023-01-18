import React from "react";
import {TabItemContainer} from "./styled-components";
import {useNavigate} from "react-router-dom";

const TabItem = ({ item }) => {
    const { title, path } = item;
    const selected = window.location.pathname === path
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(path)
    }
    return(
        <TabItemContainer onClick={handleClick} selected={selected}>
            <item.icon/>
            {title}
        </TabItemContainer>
    )
}

export default TabItem;
