import {Container} from "@mui/material";
import styles from "../../../css/resultSection.module.css";
import Box from "@mui/material/Box";
import FilterButton from "../input/FilterButton";
import IconButton from "@mui/material/IconButton";
import PushPinIcon from "@mui/icons-material/PushPin";
import AddIcon from "@mui/icons-material/Add";
import CustomBarChart from "../animation/charts/CustomBarChart";
import React from "react";

export default function CustomBox({ children }) {
    return (
        <Box
            sx={{
                m: 1, pt: 3, pb: 3, pl: 3, display: 'inline-block',
                alignItems: 'center', justifyItem: 'center',
                width: '100%',
                bgcolor: '#ffffff',
                borderRadius: 5,
            }}
            elevation={0}
        >
            {children}
        </Box>
    );
}