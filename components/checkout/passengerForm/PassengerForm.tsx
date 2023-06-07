import { useEffect, useState } from "react";
import styles from "./PassengerForm.module.scss";
import { SELECTED_TRIP } from "@/constants/common";
import PassengerCard from "../passengerCard/PassengerCard";
import Button from "@/components/common/button/Button";
import SideCard from "@/components/common/sideCard/SideCard";
import Luggage from "@/components/common/icons/Luggage";
const PassengerForm = () => {
    const [passengers, setPassengers] = useState<any>([]);
    const [price, setPrice] = useState<any>(null);

    useEffect(() => {
        const tripDetails = sessionStorage.getItem(SELECTED_TRIP)
        if (tripDetails) {
            setPassengers(JSON.parse(tripDetails)?.passengers);
            setPrice(JSON.parse(tripDetails)?.fareTotal);
        }
    }, [])
    return (
        <section className={styles["passenger-form"]}>
            <div className={styles.left}>
                {passengers.map((passenger: any, i: number) => (
                    <PassengerCard number={i} type={passenger.Type} />
                ))}

                <div className={styles["passenger-form__actions"]}>
                    <Button variant="dark-outlined">Back</Button>
                    <Button variant="primary">Next</Button>
                </div>
            </div>
            <div className={styles.right}>
                <SideCard title="Booking Price">
                    <ul className={styles.price}>
                        <li>
                            <span>{passengers.length || 1}x Passenger </span>
                            <b>{price?.Basic}</b>
                        </li>
                        <li>
                            <span>Taxes & Charges </span>
                            <b>{price?.TotalTax}</b>
                        </li>

                        <li>
                            <span>Total </span>
                            <b>{price?.Total}</b>
                        </li>

                    </ul>
                </SideCard>
                <SideCard title="Baggage Dimensions">
                    <ul className={styles.baggage}>
                        <li>
                            <span>
                                <Luggage width="15.17" height="21.67" />
                                Carry-on bag
                            </span>

                            <span>
                                55x20x40cm, 8kg
                            </span>
                        </li>
                    </ul>
                </SideCard>
                <SideCard title="flight details">
                    <div className={styles["flight-details"]}>
                        <h6>Dubai (DXB) - Lahore (LHE)</h6>
                        <img src={"/images/flight-logo.png"} />
                    </div>
                </SideCard>
            </div>
        </section>
    );
}

export default PassengerForm;