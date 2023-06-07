import React, { InputHTMLAttributes } from "react";
import styles from "./Textfield.module.scss"
import { FieldError } from "react-hook-form";

interface TextfieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    ref: any
    error?: string
    small?: boolean
}

const Textfield = React.forwardRef<HTMLInputElement, TextfieldProps>(({ label, error, small, ...restProps }, ref) => {
    return (
        <div className={styles.textfield}>
            <label className={small ? styles.small : ""} htmlFor="">{label}</label>
            <input  {...restProps} ref={ref} />
            {error && <span className={styles["textfield__error-text"]}>{error}</span>}
        </div>
    );
})

export default Textfield;