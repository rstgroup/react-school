import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import routes from "../../constants/routes";
import useStoreRoute from "../../hooks/useStoreRoute";
import NavigationItem from "./NavigationItem";
import NavigationButton from "./NavigationButton";

const drawerWidth = 240;

const navItems = [
    routes.home,
    routes.characters,
    routes.planets,
    routes.ships,
];

function NavigationBar() {
    const { pathname } = useStoreRoute(); // save current route in store
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Star Wars API
            </Typography>
            <Divider />
            <List>
                {navItems.map(({ path, label }) => (
                    <NavigationItem
                        key={path}
                        path={path}
                        label={label}
                        isActive={path === pathname}
                    />
                ))}
            </List>
        </Box>
    );


    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        align="left"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        Star Wars API
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map(({ path, label }) => (
                            <NavigationButton
                                key={path}
                                path={path}
                                label={label}
                                isActive={path === pathname}
                            />
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

NavigationBar.propTypes = {};

export default NavigationBar;
