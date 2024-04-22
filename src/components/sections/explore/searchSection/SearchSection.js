import styles from "../../../../css/searchSection.module.css"
import {Container, Grid} from "@mui/material";
import SearchBar from "../../../utils/searchBar/SearchBar";
import SearchFilter from "./SearchFilter";
import CompanySearchBar from "../../../utils/searchBar/CompanySearchBar";

export default function SearchSection() {
    return (
        <div className={styles.section}>
            <Container
                sx={{
                    // bgcolor: '#c5d5f8',
                    display: 'flex', alignItems: 'center'}}
            >
                <Grid container spacing={0}>
                    <Grid item xs = {8}>
                        <SearchBar placeHolder={"Software Engineer"}/>
                    </Grid>
                    <Grid item xs = {4}>
                        <CompanySearchBar placeHolder={"Company"}/>
                    </Grid>
                    <Grid item xs = {12}>
                        <SearchFilter />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}