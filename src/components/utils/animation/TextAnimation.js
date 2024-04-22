import React from "react";
import TextTransition, { presets } from "react-text-transition";
import styles from '../../../css/heroContent.module.css'

export default function TextAnimation({TEXTS}) {
    const [index, setIndex] = React.useState(0);

    React.useState(() => {
        const internvalId = setInterval(() => setIndex((index) => index + 1),
            3000,
        );
        return () => clearTimeout(internvalId);
    }, []);

    return (
        <text className={styles.textTransition}>
            <TextTransition springConfig={presets.slow}>{TEXTS[index % TEXTS.length]}</TextTransition>
        </text>
    )
}
