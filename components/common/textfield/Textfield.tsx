import React, { InputHTMLAttributes } from "react";
import styles from "./Textfield.module.scss"
import { FieldError } from "react-hook-form";

interface TextfieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    ref: any
    error?: string
}

const Textfield = React.forwardRef<HTMLInputElement, TextfieldProps>(({ label, error, ...restProps }, ref) => {
    return (
        <div className={styles.textfield}>
            <label htmlFor="">{label}</label>
            <input  {...restProps} ref={ref} />
            {error && <span className={styles["textfield__error-text"]}>{error}</span>}
        </div>
    );
})

export default Textfield;