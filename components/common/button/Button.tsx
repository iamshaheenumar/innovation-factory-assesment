import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: "outlined" | "primary" | "primary-outlined" | "text" | "dark-outlined";
  size?: "lg" | "md"
}

const Button = ({ children, variant, size, className, ...restProps }: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${styles[`button--${variant}`]} ${size === "lg" ? styles["button--lg"] : ""} ${className ? className : ""}`}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
