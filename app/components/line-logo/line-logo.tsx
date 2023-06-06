import MetroLineEnum from "@/app/enums/metro-line-enum";
import styles from './line-logo.module.css'

export default function LineLogo({ lineEnum }: { lineEnum: MetroLineEnum }) {
    return (
        <p className={`${styles.line_logo} ${lineEnum}`}>{lineEnum}</p>
    )
}