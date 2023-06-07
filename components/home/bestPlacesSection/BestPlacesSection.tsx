import Button from "@/components/common/button/Button";
import styles from "./BestPlacesSection.module.scss";
import CheveronRight from "@/components/common/icons/CheveronRight";
import BestPlaceCard from "./BestPlaceCard";

const BEST_PLACES = [
    {
        name: "Burj Khalifa",
        bg: "/images/bestplace-1.png",
        rating: 4.9,
        amount: "",
    },
    {
        name: "Queen’s Gambit",
        bg: "/images/bestplace-2.png",
        rating: 4.7,
        amount: "$238",
    },
    {
        name: "Beyond the Blues",
        bg: "/images/bestplace-3.png",
        rating: 4.3,
        amount: "$238",
    },
];

const BestPlacesSection = () => {
    return (
        <section className={styles["best-places-section"]}>
            <div className={styles["best-places-section__content"]}>
              <div className={styles["best-places-section__content-left"]}>
                  <div className={styles["cards-list"]}>
                      {BEST_PLACES.map((place) => (
                          <BestPlaceCard title={place.name} bg={place.bg} rating={place.rating} amount={place.amount} />
                      ))}
                  </div>
              </div>
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
