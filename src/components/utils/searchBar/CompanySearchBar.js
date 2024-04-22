import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import * as React from "react";
import Box from "@mui/material/Box";

export default function CompanySearchBar({placeHolder}) {
    return (
        <Box
            variant="outlined"
            component="form"
            sx={{ m: 1, pl: 1, border: 1, borderColor: '#dfe3e8', display: 'flex', alignItems: 'center', height: 100,
                bgcolor: '#ffffff', borderRadius: 5,
                '&:hover': {bgcolor: '#f9f9ff'},
            }}
            elevation={0}
        >
            <IconButton type="button" sx={{ p: '15px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder= {placeHolder}
                inputProps={{ 'aria-label': 'search google maps' }}
            />
        </Box>
    )
}