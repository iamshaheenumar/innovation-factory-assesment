import Image from "next/image";
import styles from "./FlightCard.module.scss";
import Button from "@/components/common/button/Button";
import FlightIcon from "@/components/common/icons/Flight";
import Luggage from "@/components/common/icons/Luggage";
import CheveronDown from "@/components/common/icons/CheveronDown";
import dayjs from "dayjs";
import convertMinstoHours from "@/utils/convertMinstoHours";
import { SELECTED_TRIP } from "@/constants/common";
import { useRouter } from "next/router";
import { useState } from "react";
import Loading from "@/components/common/loading/Loading";

interface FlightCardProps {
    data: any
}

const FlightCard = ({ data }: FlightCardProps) => {
    const router = useRouter();

    const [isRedirecting, setRedirecting] = useState(false)

    const stops = data?.tours[0]?.TotalStops || 0;
    const departureDetails = data?.tours[0]?.tourSegments[0];
    const arrivalDetails = data?.tours[0]?.tourSegments[stops];

    const durationInMins = data?.tours[0]?.tourSegments.reduce((accumulator: number, object: any) => {
        return accumulator + (+object.JourneyDuration);
    }, 0);

    const duration = convertMinstoHours(durationInMins)

    const handleSelectFlight = () => {
        setRedirecting(true);
        sessionStorage.setItem(SELECTED_TRIP, JSON.stringify(data));
        setTimeout(() => {
            router.push("/checkout")
            setRedirecting(false);
        }, 1000)
    }
    return (
        <div className={styles["flight-card"]}>
            <div className={styles["flight-card__header"]}>
                <div className={styles["flight-card__company"]}>
                    <Image
                        src={"/images/flight-logo.png"}
                        width={38}
                        height={38}
                        alt={`Emirates Logo`}
                        className={styles["flight-card__logo"]}
                    />
                    <h6>{departureDetails?.AirlineName}</h6>
                </div>

                <span className={styles["flight-card__rate"]}>{data?.fareTotal?.Total}</span>
            </div>

            <div className={styles["flight-card__second"]}>
                <div className={styles["flight-card__details"]}>
                    <div className={styles["flight-card__route"]}>
                        <span>{departureDetails?.DepartureAirportCode}</span>
                        <div className={styles["route-direction"]}>
                            <div className={styles.stop}></div>
                            <FlightIcon height="20" width="22.52" />
                            <div className={styles.stop}></div>
                        </div>
                        <span>{arrivalDetails?.ArrivalAirportCode}</span>
                    </div>
                    <div className={styles["flight-card__time"]}>
                        <span className={styles.departure}>
                            {departureDetails?.DepartureDateTime && dayjs(departureDetails?.DepartureDateTime).format("DD MMM")}
                            <br />
                            {departureDetails?.DepartureDateTime && dayjs(departureDetails?.DepartureDateTime).format("HH : mm")}
                        </span>
                        <p className={styles.duration}>
                            {duration} <i> ({stops} stop)</i>
                        </p>

                        <span className={styles.arrival}>
                            {arrivalDetails?.ArrivalDateTime && dayjs(arrivalDetails?.ArrivalDateTime).format("DD MMM")}
                            <br />
                            {arrivalDetails?.ArrivalDateTime && dayjs(arrivalDetails?.ArrivalDateTime).format("HH : mm")}
                        </span>
                    </div>
                </div>
                <Button variant="primary" onClick={handleSelectFlight}>
                    {isRedirecting && <Loading />}
                    Select Flight
                </Button>
            </div>

            <div className={styles["flight-card__footer"]}>
                <ul className={styles.features}>
                    <li>Economy Light</li>
                    <li>
                        <Luggage />
                        Carry-on bag included
                    </li>
                </ul>
                <span className={styles.expand}>
                    Show details
                    <CheveronDown width="12" height="6" />
                </span>
            </div>
        </div>
    );
};

export default FlightCard;
