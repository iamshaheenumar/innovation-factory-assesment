import Header from "@/components/common/header/Header";
import styles from "./HeroSection.module.scss"
import Button from "@/components/common/button/Button";
import BookingWidget from "@/components/common/bookingWidget/BookingWidget";
import CheveronRight from "@/components/common/icons/CheveronRight";
const HeroSection = () => {
    return (
        <section className={styles["hero-section"]}>
            <Header />
            <div className={styles["hero-section__content"]}>
                <h2 className={styles["hero-section__tagline"]}>Just seconds away from</h2>
                <h1 className={styles["hero-section__title"]}>A WORLD OF <br /> LUXURY</h1>
                <p className={styles["hero-section__desc"]}>
                    Lörem ipsum krorat ekosiv och sende anime då cringe. Detisk. Egonat. Diren den eftersom sojaren, men poligam.
                </p>
                <Button size="lg" variant="primary">
                    Let’s Start Now
                    <i className={styles["hero-section__cta-icon"]}>
                        <CheveronRight />
                    </i>
                </Button>
            </div>
            <BookingWidget />
        </section>
    );
}

export default HeroSection;