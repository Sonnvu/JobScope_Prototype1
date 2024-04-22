import * as React from 'react';
import Box from '@mui/material/Box';
import {CardContent, Grid} from "@mui/material";
import CustomRadarChart from "../animation/charts/CustomRadarChart";
import styles from "../../../css/featureSection.module.css"

export default function FeatureCard1() {
    return (
        <Box sx={{ bgcolor: '#f6f8fd', maxWidth: 550, borderRadius: 7}}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Box sx={{ bgcolor: '#ffffff', borderRadius: 5,}}>
                            <CustomRadarChart index={0} />
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{ bgcolor: '#ffffff', borderRadius: 5 }}>
                            <CustomRadarChart index={1} />
                        </Box>
                    </Grid>
                </Grid>
            </CardContent>
            <CardContent>
                <text className={styles.featureItemDescription}>Compare Career Paths</text>
                <div className={styles.featureItemSubDescription}>
                    <text >
                        Transform your interested career paths into compact widgets and
                        save to your dashboard
                    </text>
                </div>
            </CardContent>
        </Box>
    );
}