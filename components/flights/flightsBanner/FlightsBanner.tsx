import Breadcrumbs from "@/components/common/breadcrumbs/Breadcrumbs";
import styles from "./FlightsBanner.module.scss";

const FLIGHTS_BREADCRUMBS = [
    { key: "home", label: "Home", link: "/" },
    { key: "available-flights", label: "Available Flights", link: "" },
]

const FlightsBanner = () => {
    return (
        <div className={styles["flights-banner"]}>
            <h1>Available Flights</h1>
            <Breadcrumbs data={FLIGHTS_BREADCRUMBS} />
        </div>
    );
}

export default FlightsBanner;