import * as React from 'react';
import Box from '@mui/material/Box';
import {CardContent} from "@mui/material";
import styles from "../../../css/featureSection.module.css"
import CustomLineChart from "../animation/charts/CustomLineChart";

export default function FeatureCard3() {
    return (
        <Box sx={{ bgcolor: '#f6f8fd', maxWidth: 550, borderRadius: 7}}>
            <CardContent>
                <Box sx={{ p: 2, bgcolor: '#ffffff', borderRadius: 5}}>
                    <CustomLineChart dataIndex={1} aspectRation={2.2} />
                </Box>
            </CardContent>
            <CardContent>
                <text className={styles.featureItemDescription}>Discover Trends</text>
                <div className={styles.featureItemSubDescription}>
                    <text>
                        Examine trends of your interested positions based on
                        appearance frequencies from the market
                    </text>
                </div>
            </CardContent>
        </Box>
    );
}