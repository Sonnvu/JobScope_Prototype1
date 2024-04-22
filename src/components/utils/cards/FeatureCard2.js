import * as React from 'react';
import Box from '@mui/material/Box';
import {CardContent} from "@mui/material";
import styles from "../../../css/featureSection.module.css"
import CustomBarChart from "../animation/charts/CustomBarChart";
import SimpleSearchBar from "../searchBar/JobTypeSearch";

export default function FeatureCard2() {
    return (
        <Box sx={{ bgcolor: '#f6f8fd', maxWidth: 550, borderRadius: 7}}>
            <CardContent>
                <Box sx={{ p: 2, bgcolor: '#ffffff', borderRadius: 5}}>
                    <SimpleSearchBar placeHolder={"E.g. Hardware Engineer"}/>
                    <CustomBarChart aspectRatio={3.1} dataIndex={1}/>
                </Box>
            </CardContent>
            <CardContent>
                <text className={styles.featureItemDescription}>Explore Demand Skills</text>
                <div className={styles.featureItemSubDescription}>
                    <text>
                        Discover list of most popular skills from thousands of job posts
                        for your interested position, company, or field
                    </text>
                </div>
            </CardContent>
        </Box>
    );
}