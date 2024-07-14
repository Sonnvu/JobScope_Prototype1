import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import * as React from "react";
import Box from "@mui/material/Box";
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function SearchBar({placeHolder, onResponse}) {

    const [keyword, setKeyword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSearch = async (e) => {
        console.log("Searching for: " + keyword);
        e.preventDefault();
        setLoading(true);
        setError(null);

        if (keyword) {
            navigate(`/explore/${keyword}`, { state: keyword, replace: true });
            try {
                const response = await axios.get(`http://localhost:8080/explore/${keyword}`);
                setKeyword(keyword);
                // Process response data (e.g., generate bar graph)
                console.log(response.data);
                onResponse(response.data)
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        } else {
            navigate('/explore');
            setLoading(false);
        }
    };

    return (
        <Box
            variant="outlined"
            component="form"
            onSubmit={handleSearch}
            sx={{ m: 1, pl: 1, border: 1, borderColor: '#dfe3e8', display: 'flex', alignItems: 'center', height: 100,
                bgcolor: '#ffffff', borderRadius: 5,
                '&:hover': {bgcolor: '#f9f9ff'},
            }}
            elevation={0}
        >
            <IconButton type="submit" sx={{ p: '15px' }} aria-label="search" disabled={loading}>
                <SearchIcon />
            </IconButton>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder= {placeHolder}
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                inputProps={{ 'aria-label': 'search google maps' }}
                disabled={loading}
            />
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
        </Box>
    )
}