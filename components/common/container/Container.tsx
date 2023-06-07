import { ReactNode } from "react";
import styles from "./Container.module.scss";

interface ContainerProps {
    children: ReactNode
}

const Container = ({ children }: ContainerProps) => {
    return (
        <section className={styles.container}>
            {children}
        </section>
    );
}

export default Container;