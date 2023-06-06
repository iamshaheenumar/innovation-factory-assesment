import Link from "next/link";
import styles from "./Breadcrumbs.module.scss";

interface BreadcrumbsProps {
    data: {
        key: string;
        label: string;
        link: string;
    }[];
}

const Breadcrumbs = ({ data }: BreadcrumbsProps) => {
    return (
        <ul className={styles["bread-crumbs"]}>
            {data.map((item, i) => (
                <li key={item.key}>
                    {i == data.length ? (
                        <span>{item.label}</span>
                    ) : (
                        <Link href={item.link}>{item.label}</Link>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default Breadcrumbs;
