import React from "react";
import styles from '../../../../css/heroContent.module.css'
import { Grid } from "@mui/material";
import MainDescription from "./MainDescription";
import ChartAnimation from "./ChartAnimation";

export default function HeroContent() {
    return (
        <div>
            <div className={styles.section}>
                <div className={styles.container}>
                    <Grid container alignItems="center">
                        <Grid container item xs={6}>
                            <MainDescription/>
                        </Grid>
                        <Grid container item xs={6}>
                            <ChartAnimation/>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}