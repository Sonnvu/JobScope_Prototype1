import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function FilterButton() {
    const searchCategory = ["City", "State", "Country", "Zipcode"];

    return (
        <Autocomplete
            multiple
            limitTags={1}
            id="combo-box-demo"
            options={searchCategory}
            sx={{ width: 250,
                // ".MuiAutocomplete-inputRoot": { height: "30px",  padding: '6px 14px' }
            }}
            renderInput={(params) => <TextField {...params}  size="small" label="Search Filter" />}
        />
    );
};