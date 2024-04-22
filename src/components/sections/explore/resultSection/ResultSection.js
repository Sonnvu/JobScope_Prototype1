import styles from "../../../../css/resultSection.module.css"
import {Container } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import DemoBarChart from "../../../utils/charts/DemoBarChart";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PushPinIcon from '@mui/icons-material/PushPin';
import AddIcon from '@mui/icons-material/Add';


export default function ResultSection() {
    return (
        <div className={styles.section}>
            <Container
                sx={{
                    // bgcolor: '#c5d5f8',
                    display: 'flex', alignItems: 'center'}}
            >
                <Box
                    sx={{ m: 1, pt: 2, pb: 5, pl: 3, display: 'inline-block',
                        alignItems: 'center', justifyItem: 'center',
                        height: 400, width: '100%',
                        bgcolor: '#ffffff',
                        borderRadius: 5,
                    }}
                    elevation={0}
                >
                    <Container sx={{ p: 1, justifyContent: 'space-between',
                        // bgcolor: '#dce1ef',
                        display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <text className={styles.widgetHeading}>Skills Graph for
                            position: Software Engineer
                        </text>
                        <Box>
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
                        <DemoBarChart aspectRatio={3} dataIndex={0}/>
                    </Container>
                </Box>
            </Container>
        </div>
    )
}