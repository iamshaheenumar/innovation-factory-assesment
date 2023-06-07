import { InputHTMLAttributes } from "react";
import styles from "./Checkbox.module.scss"

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string
}

const Checkbox = ({ label, id, ...restProps }: CheckboxProps) => {
    return (
        <div className={styles.checkbox}>
            <input type="checkbox" id={id} {...restProps} />
            <label htmlFor={id}>{label}</label>
        </div>
    );
}

export default Checkbox;