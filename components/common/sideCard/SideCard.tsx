import { ReactNode } from "react";
import styles from "./SideCard.module.scss"

interface SideCardProps {
    title: string
    children: ReactNode
}
const SideCard = ({ title, children }: SideCardProps) => {
    return (
        <div className={styles["side-card"]}>
            <div className={styles["side-card__header"]}>
                <h2>{title}</h2>
            </div>
            <div className={styles["side-card__body"]}>
                {children}
            </div>

        </div>
    );
}

export default SideCard;