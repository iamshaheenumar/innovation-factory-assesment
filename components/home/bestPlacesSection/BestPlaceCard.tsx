import FavouriteIcon from "@/components/common/icons/Favourite";
import styles from "./BestPlacesSection.module.scss";

interface BestPlaceCardProps {
    bg: string;
    amount: string;
    title: string;
    rating: number;
}

const BestPlaceCard = (props: BestPlaceCardProps) => {
    return (
        <div
            style={{ backgroundImage: `url(${props.bg})` }}
            className={styles["cards-list__item"]}
        >
            <div className={styles.header}>
                <div className={styles["cards-list__rating"]}>
                    <img src="/images/star.png" />
                    <span>{props.rating}</span>
                </div>
                <FavouriteIcon />
            </div>

            <div className={styles.footer}>
                <h6>{props.title}</h6>
                {props.amount && (
                    <p>
                        {props.amount} <i>/ per person</i>
                    </p>
                )}
            </div>
        </div>
    );
};

export default BestPlaceCard;
