import Luggage from "@/components/common/icons/Luggage";
import styles from "./CheckoutStepper.module.scss";
import UsersIcon from "@/components/common/icons/UsersIcon";
import CardIcon from "@/components/common/icons/Card";

const CheckoutStepper = () => {
    return (
        <div className={styles["checkout-stepper"]}>
            <div className={`${styles["step"]} ${styles["step--completed"]}`}>
                <div className={styles["icon-container"]}>
                    <Luggage height={"29"} width="20" />
                </div>
                <p>Customize your trip</p>
            </div>
            <div className={styles.divider} />
            <div className={`${styles["step"]} ${styles["step--active"]}`}>
                <div className={styles["icon-container"]}>
                    <UsersIcon />
                </div>
                <p>Passenger Details</p>
            </div>
            <div className={styles.divider} />
            <div className={styles["step"]}>
                <div className={styles["icon-container"]}>
                    <CardIcon />
                </div>
                <p>Payment</p>
            </div>
        </div>
    );
};

export default CheckoutStepper;
