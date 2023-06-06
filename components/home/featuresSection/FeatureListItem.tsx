import { ReactNode } from "react";
import styles from "./FeaturesSection.module.scss";

interface FeatureListItemProps {
    data: {
        id: string;
        title: string;
        desc: string;
        icon: ReactNode
    }
}

const FeatureListItem = ({ data }: FeatureListItemProps) => {
    return (
        <div className={styles["features-list-item"]}>
            <div className={styles["features-list-item__icon"]}>
                {data.icon}
            </div>
            <div>
                <h6>{data.title}</h6>
                <p>{data.desc}</p>
            </div>
        </div>
    );
}

export default FeatureListItem;