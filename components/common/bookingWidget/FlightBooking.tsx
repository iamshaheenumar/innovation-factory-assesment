import FilterTabs from "../filterTabs/FilterTabs";
import styles from "../bookingWidget/BookingWidget.module.scss";
import { FormEvent, useState } from "react";
import CheveronDown from "../icons/CheveronDown";
import BookingInput from "./BookingInput";
import FlightUp from "../icons/FlightUp";
import FlightDown from "../icons/FlightDown";
import SwitchIcon from "../icons/Switch";
import CalenderIcon from "../icons/Calender";
import UsersIcon from "../icons/UsersIcon";
import Button from "../button/Button";
import SearchIcon from "../icons/Search";
import { useRouter } from "next/router";

const TRIP_TYPES = {
    oneway: "oneway",
    round: "round",
};

const FLIGHT_BOOKING_FILTERS = [
    { label: "One Way", key: TRIP_TYPES.oneway },
    { label: "Round Trip", key: TRIP_TYPES.round },
];

const FlightBooking = () => {
    const [tripType, setTripType] = useState(TRIP_TYPES.oneway);
    const router = useRouter();

    const handleTripTypeChange = (type: string) => setTripType(type);

    const handleFlightSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push("/flights");
    };
    return (
        <div className={styles["flight-booking"]}>
            <div className={styles["flight-booking__filters"]}>
                <div className={styles["flight-booking__select"]}>
                    <select>
                        <option value={"Business"}>Business</option>
                        <option value={"Economy"}>Economy</option>
                    </select>
                    <CheveronDown width="12" />
                </div>

                <FilterTabs
                    data={FLIGHT_BOOKING_FILTERS}
                    activeTab={tripType}
                    onChange={handleTripTypeChange}
                />
            </div>
            <form className={styles["flight-booking__form"]}>
                <div className={styles["flight-booking__fields"]}>
                    <div className={styles["flight-booking__field-group"]}>
                        <BookingInput
                            id="flight-from"
                            label="Flying from"
                            icon={<FlightUp />}
                            placeholder="Dubai (DXB)"
                        />

                        <button className={styles["flight-booking__switch-btn"]}>
                            <SwitchIcon />
                        </button>

                        <BookingInput
                            id="flight-to"
                            label="Flying to"
                            icon={<FlightDown />}
                            placeholder="Sharjah (SHJ)"
                        />
                    </div>

                    <div className={styles["flight-booking__field-group"]}>
                        <BookingInput
                            id="departure"
                            label="Departure"
                            icon={<CalenderIcon />}
                            placeholder="18 Apr 2023"
                            type="date"
                        />

                        <BookingInput
                            id="return"
                            label="Return"
                            icon={<CalenderIcon />}
                            placeholder="18 Apr 2023"
                            type="date"
                        />
                    </div>

                    <div className={styles["flight-booking__field-group"]}>
                        <BookingInput
                            lg
                            id="travellers"
                            label="Travelers"
                            icon={<UsersIcon />}
                            placeholder="2 Adults, 3 Children"
                        />
                    </div>
                </div>

                <Button
                    onClick={handleFlightSearch}
                    className={styles["flight-booking__search-btn"]}
                    variant="primary"
                    size="lg"
                >
                    <SearchIcon />
                    Search
                </Button>
            </form>
        </div>
    );
};

export default FlightBooking;
