import Image from "next/image";
import BrandsList from "./BrandsList";
import styles from "./FeaturesSection.module.scss"
import FlightIcon from "@/components/common/icons/Flight";
import CarIcon from "@/components/common/icons/Car";
import FeatureListItem from "./FeatureListItem";
import HotelIcon from "@/components/common/icons/Hotel";
import HomestayIcon from "@/components/common/icons/Homestay";
import SuitcaseIcon from "@/components/common/icons/Suitcase";

const FEATURES_LIST = [
    { id: "1", title: "Flight", desc: "We provide some very affordable prices compared to others.", icon: <FlightIcon height="25" width="28.5" /> },
    { id: "2", title: "Hotels", desc: "Stay in style with our luxurious hotels.", icon: <HotelIcon height="24.5" width="24.5" /> },
    { id: "3", title: "Homestay", desc: "Experience local living at its finest with our homestays.", icon: <HomestayIcon /> },
    { id: "4", title: "Car Rental", desc: "Hit the road with ease and convenience with our car rental service.", icon: <CarIcon height="21" width="28" /> },
    { id: "5", title: "Business", desc: "Indulge in the ultimate luxury of private travel with our charter booking service.", icon: <SuitcaseIcon /> },
]

const FeaturesSection = () => {
    return (
        <section className={styles["features-section"]}>
            <BrandsList />
            <div className={styles["features-section__details"]}>
                <div className={styles["features-section__details-left"]}>
                    <Image
                        src={"/images/get-exp-banner.png"}
                        width={470}
                        height={270}
                        alt={""}
                        className={styles["features-section__banner"]}
                    />

                    <h2>Get Experience In <br />
                        We are Expert</h2>

                    <p>Lörem ipsum krorat ekosiv och sende anime då cringe. Detisk. Egonat. Diren den eftersom sojaren, men poligam.</p>

                </div>

                <div className={styles["features-section__details-right"]}>
                    <div>
                        {FEATURES_LIST.map((item) => (
                            <FeatureListItem key={item.id} data={item} />
                        ))}
                    </div>

                </div>
            </div>

        </section>
    );
}

export default FeaturesSection;
