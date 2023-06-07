import Breadcrumbs from "@/components/common/breadcrumbs/Breadcrumbs";
import styles from "./FlightsBanner.module.scss";
import BookingWidget from "@/components/common/bookingWidget/BookingWidget";

const FLIGHTS_BREADCRUMBS = [
    { key: "home", label: "Home", link: "/" },
    { key: "available-flights", label: "Available Flights", link: "" },
]

const FlightsBanner = () => {
    return (
        <div className={styles["flights-banner"]}>
            <h1>Available Flights</h1>
            <Breadcrumbs data={FLIGHTS_BREADCRUMBS} />

            <BookingWidget onlyFlights />
        </div>
    );
}

export default FlightsBanner;