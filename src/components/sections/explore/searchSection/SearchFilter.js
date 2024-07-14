import Box from "@mui/material/Box";
import {Grid} from "@mui/material";
import LocationSearchBar from "../../../utils/searchBar/LocationSearchBar";
import TimeRange from "../../../utils/searchBar/TimeRange";
import JobTypeSearch from "../../../utils/searchBar/JobTypeSearch";
import GraphType from "../../../utils/searchBar/GraphType";

export default function SearchFilter() {
    return (
        <Box
            sx={{ m: 1, pl: 1, display: 'flex', alignItems: 'center', height: 100,
                bgcolor: '#ffffff', borderRadius: 5,
            }}
            elevation={0}
        >
            <Grid container>
                <Grid item xs={3}>
                    <LocationSearchBar placeHolder={"City, state, or zipcode"}/>
                </Grid>
                <Grid iten xs={2}>
                    <TimeRange placeHolder={"Past 3 years"}/>
                </Grid>
                <Grid iten xs={2}>
                    <JobTypeSearch placeHolder={"Entry level"}/>
                </Grid>
                <Grid iten xs={2}>
                    <GraphType placeHolder={"Graph Type"}/>
                </Grid>
                <Grid iten xs={2}>
                    <GraphType placeHolder={"Graph Type"}/>
                </Grid>
            </Grid>
        </Box>
    )
}