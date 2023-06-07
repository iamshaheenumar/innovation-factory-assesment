import Image from "next/image";
import styles from "./ReviewsSection.module.scss";

const ReviewsSection = () => {
    return (
        <section className={styles["reviews-section"]}>
            <div className={styles["reviews-section__content"]}>
                <div className={styles.left}>
                    <Image
                        src={"/images/map.png"}
                        width={700}
                        height={370}
                        alt={`World map`}
                        className={styles["reviews-section__map"]}
                    />
                </div>
                <div className={styles.right}>
                    <h2>
                        Our Customers <br />
                        Say About Us
                    </h2>
                    <Image
                        src={"/images/doublt-tick.png"}
                        width={28.34}
                        height={22.67}
                        alt={`Double tick`}
                        className={styles["reviews-section__tick"]}
                    />
                    <p>
                        Lörem ipsum krorat ekosiv och sende anime då cringe. Detisk. Egonat.
                        Diren den eftersom sojaren, men poligam.
                    </p>
                    <div className={styles.user}>
                        <img src="/images/dummy-user.png" />
                        <span className={styles.name}>Amina Rayees</span>
                        <span className={styles.divider}></span>
                        <span className={styles.profession}>Travel Guide</span>
                    </div>
                    <div className={styles.rating}>
                        <img src="/images/star.png" />
                        <img src="/images/star.png" />
                        <img src="/images/star.png" />
                        <img src="/images/star.png" />
                        <img src="/images/star.png" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;
