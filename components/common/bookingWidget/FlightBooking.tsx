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
import { CITIES } from "@/constants/common";
import { toast } from "react-hot-toast";

const TRIP_TYPES = {
    oneway: "oneway",
    round: "round",
};

const FLIGHT_BOOKING_FILTERS = [
    { label: "One Way", key: TRIP_TYPES.oneway },
    { label: "Round Trip", key: TRIP_TYPES.round },
];

const FlightBooking = () => {
    const [tripType, setTripType] = useState(TRIP_TYPES.round);
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [departureDate, setDepartureDate] = useState("");
    const [returnDate, setReturnDate] = useState("");
    const [passengers, setPassengers] = useState({ adults: 1, childs: 0, infants: 0 });

    const router = useRouter();

    const handleTripTypeChange = (type: string) => setTripType(type);

    const handleFlightSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!origin || !destination || !departureDate) {
            toast.error("Please fill all details.");
            return false;
        }

        router.push({
            pathname: "/flights",
            query: {
                tripType,
                origin,
                destination,
                departureDate,
                ...(tripType === TRIP_TYPES.round && { returnDate }),
                ...passengers
            }
        }).then(() => router.reload());
    };

    const handleCitySwitch = () => {

        if (!origin || !destination) {
            toast.error("Please choose both Flying from and Flying to.")
            return false;
        }
        const originCopy = origin;
        setOrigin(destination);
        setDestination(originCopy);
    }

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
            <form className={styles["flight-booking__form"]} onSubmit={handleFlightSearch}>
                <div className={styles["flight-booking__fields"]}>
                    <div className={styles["flight-booking__field-group"]}>
                        <BookingInput.Autocomplete
                            id="flight-from"
                            name="origin"
                            label="Flying from"
                            icon={<FlightUp />}
                            placeholder="Dubai (DXB)"
                            options={CITIES.map(({ name, code }) => ({ label: `${name} (${code.toUpperCase()})`, value: code }))}
                            onOptionSelect={(val) => typeof val === "string" && setOrigin(val)}
                            selectedVal={origin}
                        />

                        <button onClick={handleCitySwitch} type="button" className={styles["flight-booking__switch-btn"]}>
                            <SwitchIcon />
                        </button>

                        <BookingInput.Autocomplete
                            id="flight-to"
                            label="Flying to"
                            icon={<FlightDown />}
                            placeholder="Sharjah (SHJ)"
                            options={CITIES.map(({ name, code }) => ({ label: `${name} (${code.toUpperCase()})`, value: code }))}
                            onOptionSelect={(val) => typeof val === "string" && setDestination(val)}
                            selectedVal={destination}
                        />
                    </div>

                    <div className={styles["flight-booking__field-group"]}>
                        <BookingInput.DatePicker
                            id="departure"
                            label="Departure"
                            icon={<CalenderIcon />}
                            placeholder="18 Apr 2023"
                            type="date"
                            onOptionSelect={(val) => typeof val === "string" && setDepartureDate(val)}
                        />
                        {tripType === TRIP_TYPES.round &&
                            <BookingInput.DatePicker
                                id="return"
                                label="Return"
                                icon={<CalenderIcon />}
                                placeholder="18 Apr 2023"
                                type="date"
                                onOptionSelect={(val) => typeof val === "string" && setReturnDate(val)}
                            />}
                    </div>

                    <div className={styles["flight-booking__field-group"]}>
                        <BookingInput.Travellers
                            lg
                            id="travellers"
                            label="Travelers"
                            icon={<UsersIcon />}
                            placeholder="2 Adults, 3 Children"
                            onOptionSelect={(val) => typeof val !== "string" && setPassengers(val)}
                        />
                    </div>
                </div>

                <Button
                    className={styles["flight-booking__search-btn"]}
                    variant="primary"
                    size="lg"
                    type="submit"
                >
                    <SearchIcon />
                    Search
                </Button>
            </form>
        </div>
    );
};

export default FlightBooking;
