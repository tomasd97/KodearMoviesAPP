import { Box, Drawer } from "@mui/material";
import Logo from "../../components/logo/logo";
import useResponsive from "../../hooks/useResponsive";
import { SidebarContainer, TabsContainer } from "./styled-components";
import tabs from "./tabs";
import TabItem from "../../components/tab-item";

const NAV_WIDTH = 280;

const Sidebar = ({ openNav, onCloseNav }) => {
    const isDesktop = useResponsive('up', 'lg');
    const renderContent = (
        <SidebarContainer>
            <Logo/>
            <TabsContainer>
                {tabs.map(tab =>
                    <TabItem key={tab.id} item={tab}/>
                )}
            </TabsContainer>
        </SidebarContainer>
    )
    return(
        <Box
            component="nav"
            sx={{
                flexShrink: { lg: 0 },
                width: { lg: NAV_WIDTH },
            }}
        >
            {isDesktop ? (
                <Drawer
                    open
                    variant="permanent"
                    PaperProps={{
                        sx: {
                            width: NAV_WIDTH,
                            backgroundColor: 'layout.main',
                        },
                    }}
                >
                    {renderContent}
                </Drawer>
            ) : (
                <Drawer
                    open={openNav}
                    onClose={onCloseNav}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    PaperProps={{
                        sx: {
                            width: NAV_WIDTH,
                            backgroundColor: 'layout.main'
                        },
                    }}
                >
                    {renderContent}
                </Drawer>
            )}
        </Box>

    )
}

export default Sidebar;
