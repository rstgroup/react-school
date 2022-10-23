import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import React from "react";

const NavigationButton = ({ path, label, isActive }) => {
    const navigate = useNavigate();
    const redirect = () => navigate(path);

    return (
        <Button key={path} sx={{ color: isActive ? '#fff' : '#afafaf' }} onClick={redirect}>
            {label}
        </Button>
    );
}

export default NavigationButton;
