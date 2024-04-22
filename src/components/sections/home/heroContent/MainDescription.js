import React from "react";
import {Container} from "@mui/material";
import styles from "../../../../css/heroContent.module.css";
import TextAnimation from "../../../utils/animation/TextAnimation";
import ExploreNowButton from "../../../utils/ExploreNowButton";
import AnchorLink from "react-anchor-link-smooth-scroll/lib/anchor-link";

const TEXT1 = ['Skill Sets', 'Job Trends', 'Qualifications'];
const TEXT2 = ['Software Engineering', 'Ansys', 'Intel', 'Embedded Engineering'];

export default function MainDescription() {
    return (
        <Container
            // sx={{bgcolor: '#c5d5f8'}}
        >
            <div>
                <text className={styles.mainDescription}>Explore Current
                    <div>
                        <TextAnimation TEXTS={TEXT1}/>
                    </div>
                </text>
                <div className={styles.mainDescription}>For</div>
                <div>
                    <TextAnimation TEXTS={TEXT2}/>
                </div>

                <p className={styles.subDescription}>And more insights in your
                    interested field, major and company for a tailored skill set</p>
                <AnchorLink href="#feature">
                    <ExploreNowButton>Explore Now</ExploreNowButton>
                </AnchorLink>
            </div>
        </Container>
    )
}