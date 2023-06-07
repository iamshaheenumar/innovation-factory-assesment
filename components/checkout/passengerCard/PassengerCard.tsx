import Textfield from "@/components/common/textfield/Textfield";
import styles from "./PassengerCard.module.scss";

interface PassengerCardProps {
    type?: string;
    number: number;
}


const PassengerCard = (props: PassengerCardProps) => {
    return (
        <div className={styles["passenger-card"]}>
            <div className={styles["passenger-card__header"]}>
                <h4>Traveller {props.number + 1} : {props.type} {props.number === 0 && "(Lead)"}</h4>
            </div>
            <div className={styles["passenger-card__body"]}>
                <div className={styles["form-row"]}>
                    <Textfield small label="First name *" placeholder="" />
                    <Textfield small label="Middle name *" placeholder="" />
                    <Textfield small label="Last name *" placeholder="" />
                </div>
                <div className={styles["form-row"]}>
                    <Textfield type="date" small label="Birthday *" placeholder="" />
                    <Textfield small label="Nationality *" placeholder="" />
                    <Textfield small label="Phone number *" placeholder="+971" />
                </div>
                <div className={styles["form-row"]}>
                    <Textfield small label="Email *" placeholder="" />
                    <p className={styles["email-instruction"]}>
                        Booking confirmation will be sent to this email address.
                    </p>
                </div>
                <div className={styles.passport}>
                    <h6>Passport Details</h6>
                    <p>Please enter details exactly as they appear on your passport/travel document.</p>

                    <div className={styles["form-row"]}>
                        <Textfield type="date" small label="Passport number*" placeholder="" />
                        <Textfield small label="Passport expiration*" placeholder="" />
                    </div>

                </div>

            </div>
        </div>
    );
};

export default PassengerCard;
