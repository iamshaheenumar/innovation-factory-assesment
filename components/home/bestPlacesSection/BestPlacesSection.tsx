import Button from "@/components/common/button/Button";
import styles from "./BestPlacesSection.module.scss";
import CheveronRight from "@/components/common/icons/CheveronRight";

const BestPlacesSection = () => {
    return (
        <section className={styles["best-places-section"]}>
            <div className={styles["best-places-section__content"]}>
                <div className={styles["best-places-section__content-left"]}></div>
                <div className={styles["best-places-section__content-right"]}>
                    <h2>
                        Best Places <br />
                        For You
                    </h2>
                    <p>
                        Lörem ipsum krorat ekosiv och sende anime då cringe. Detisk. Egonat.
                        Diren den eftersom sojaren, men poligam.
                    </p>
                    <Button variant="primary" size="lg">
                        View More
                        <i className={styles["best-places-section__cta-icon"]}>
                            <CheveronRight />
                        </i>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default BestPlacesSection;
