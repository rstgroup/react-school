import { useNavigate } from "react-router-dom";
import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";

const NavigationItem = ({ path, label, isActive }) => {
    const navigate = useNavigate();
    const redirect = () => navigate(path);

    return (
        <ListItem key={path} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={redirect}>
                <ListItemText  primary={label} sx={{ color: isActive ? '#000000' : '#626262' }} />
            </ListItemButton>
        </ListItem>
    );
}

export default NavigationItem;
