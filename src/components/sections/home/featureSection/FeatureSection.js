import styles from '../../../../css/featureSection.module.css'
import {Stack} from "@mui/material";
import FeatureCard1 from "../../../utils/cards/FeatureCard1";
import FeatureCard2 from "../../../utils/cards/FeatureCard2";
import FeatureCard3 from "../../../utils/cards/FeatureCard3";

export default function FeatureSection() {
    return (
        <div id="feature" className={styles.section}>
            <Stack justifyContent="center" alignItems="center">
                <div className={styles.container}>
                    <h1 className={styles.featureDescription}>
                        <span className={styles.featureDescriptionSpan}>Discover</span>
                        <span> </span>
                        Our Features
                    </h1>
                </div>
                <div className={styles.featureBox}>
                    <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
                        <FeatureCard1 />
                        <FeatureCard2 />
                        <FeatureCard3 />
                    </Stack>
                </div>
            </Stack>
        </div>
    )
}