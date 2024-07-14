import styles from "../../../../css/resultSection.module.css"
import {Container } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import DemoBarChart from "../../../utils/charts/DemoBarChart";
import IconButton from "@mui/material/IconButton";
import PushPinIcon from '@mui/icons-material/PushPin';
import AddIcon from '@mui/icons-material/Add';
import FilterButton from "../../../utils/input/FilterButton";
import BarChartSearchByJobTitle from "../../../utils/charts/BarChartSearchByJobTitle";
import CustomBarChart from "../../../utils/animation/charts/CustomBarChart";
import CustomBox from "../../../utils/box/CustomBox";
import DemoGeoGraph from "../../../utils/charts/DemoGeoGraph";


export default function ResultSection({ keyword, data }) {
    const renderContent = () => {
        if(!keyword) {
            return (
                <text className={styles.widgetHeading}>Try to search something</text>
            )
        } else {
            return (
                <>
                    <Container sx={{ p: 1, justifyContent: 'space-between',
                        // bgcolor: '#dce1ef',
                        display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <text className={styles.widgetHeading}>Skills Graph for
                            position: Software Engineer
                        </text>
                        <Box sx={{ display: 'flex',  alignItems: 'center', gap: 2 }}>
                            <FilterButton />
                            <IconButton>
                                <PushPinIcon />
                            </IconButton>
                            <IconButton>
                                <AddIcon />
                            </IconButton>
                        </Box>
                    </Container>
                    <Container sx={{ p: 3, display: 'flex',
                        // bgcolor: '#c5d5f8',
                        height: 370}}>
                        <BarChartSearchByJobTitle data={data} aspectRatio={3}/>
                    </Container>
                </>
            )
        }
    }

    return (
        <div className={styles.section}>
            <Container
                sx={{
                    // bgcolor: '#c5d5f8',
                    display: 'inline-block', alignItems: 'center'
                }}
            >
                <CustomBox>
                    <Container sx={{ p: 1, justifyContent: 'space-between',
                        // bgcolor: '#dce1ef',
                        display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <text className={styles.widgetHeading}>Skills Graph for
                            position: Software Engineer
                        </text>
                        <Box sx={{ display: 'flex',  alignItems: 'center', gap: 2 }}>
                            <FilterButton />
                            <IconButton>
                                <PushPinIcon />
                            </IconButton>
                            <IconButton>
                                <AddIcon />
                            </IconButton>
                        </Box>
                    </Container>
                    <Container sx={{ p: 3, display: 'flex',
                        // bgcolor: '#c5d5f8',
                        height: 370}}>
                        <CustomBarChart aspectRatio={2.5} dataIndex={0}/>
                    </Container>

                </CustomBox>
                <CustomBox>
                    <Container sx={{ p: 1, justifyContent: 'space-between',
                        // bgcolor: '#dce1ef',
                        display: 'flex', flexDirection: 'row', alignItems: 'center'}}
                    >
                        <text className={styles.widgetHeading}>Skills Graph for
                            position: Software Engineer
                        </text>
                        <Box sx={{ display: 'flex',  alignItems: 'center', gap: 2 }}>
                            <FilterButton />
                            <IconButton>
                                <PushPinIcon />
                            </IconButton>
                            <IconButton>
                                <AddIcon />
                            </IconButton>
                        </Box>
                    </Container>
                    <Container sx={{
                        p: 3, display: 'flex',
                        // bgcolor: '#c5d5f8',
                    }}>
                        <DemoGeoGraph />
                    </Container>
                </CustomBox>
            </Container>
        </div>
    )
}