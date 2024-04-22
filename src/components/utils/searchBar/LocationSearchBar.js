import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import * as React from "react";
import Box from "@mui/material/Box";
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function LocationSearchBar({placeHolder}) {
    return (
        <Box
            variant="outlined"
            component="form"
            sx={{ m: 1, border: 1, borderColor: '#dfe3e8', display: 'flex', alignItems: 'center',
                bgcolor: '#ffffff', borderRadius: 5,
                '&:hover': {bgcolor: '#f9f9ff'},
            }}
            elevation={0}
        >
            <IconButton type="button" sx={{ m: '5px' }} aria-label="search">
                <LocationOnIcon />
            </IconButton>
            <InputBase
                sx={{ flex: 1 }}
                placeholder= {placeHolder}
                inputProps={{ 'aria-label': 'search google maps' }}
            />
        </Box>
    )
}