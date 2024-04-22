import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import * as React from "react";
import DateRangeIcon from '@mui/icons-material/DateRange';

export default function TimeRange({placeHolder}) {
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
                <DateRangeIcon />
            </IconButton>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder= {placeHolder}
                inputProps={{ 'aria-label': 'search google maps' }}
            />
        </Box>
    )
}