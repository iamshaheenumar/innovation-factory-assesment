import styles from "./FilterTabs.module.scss"


interface FilterTabProps {
    data: {
        label: string;
        key: string | number;
    }[];
    onChange: (type: string | number) => void;
    activeTab: string | number
}

const FilterTabs = ({ data, onChange, activeTab }: FilterTabProps) => {
    return (
        <div className={styles["filter-tabs"]}>
            {data.map((item) => (
                <div key={item.key}
                    className={`${styles["filter-tabs__item"]} ${activeTab === item.key ? styles["filter-tabs__item--active"] : ""}`}
                    onClick={() => onChange(item.key)}
                >
                    {item.label}
                </div>
            ))}
        </div>
    );
}

export default FilterTabs;