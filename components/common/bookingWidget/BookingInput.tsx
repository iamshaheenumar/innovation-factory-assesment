import { HTMLProps, ReactNode } from "react";
import styles from "./BookingWidget.module.scss";

interface BookingInputProps extends HTMLProps<HTMLInputElement> {
    label: string;
    id: string;
    icon: ReactNode;
    lg?: boolean;
}

const BookingInput = ({ label, id, icon, lg, ...restProps }: BookingInputProps) => {
    return (
        <div className={`${styles["booking-input"]} ${lg ? styles["booking-input--lg"] : ""}`}>
            <label htmlFor={id}>{label}</label>
            <div className={styles["booking-input__icon-input"]}>
                <i>{icon}</i>
                <input id={id} {...restProps} />
            </div>
        </div>
    );
}

export default BookingInput;