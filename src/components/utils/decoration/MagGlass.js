import { ReactComponent as Logo } from "../decoration/svg/searchFile.svg";
import styles from "../../../css/decoration.module.css"
export default function MagGlass() {
    return (
        <div className={styles.magGlassContainer}>
            <Logo className={styles.magGlass}/>
        </div>
    )
}