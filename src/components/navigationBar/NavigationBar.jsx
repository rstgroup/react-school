import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import routes from "../../constants/routes";
import useStoreRoute from "../../hooks/useStoreRoute";
import NavigationButton from "./NavigationButton";

const navItems = [
    routes.home,
    routes.characters,
    routes.planets,
    routes.ships,
];

function NavigationBar() {
    const { pathname } = useStoreRoute();

    return (
        <Box>
            <AppBar component="nav">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        marginRight={2}
                    >
                        Star Wars API
                    </Typography>
                    <Box>
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
        </Box>
    );
}

NavigationBar.propTypes = {};

export default NavigationBar;
