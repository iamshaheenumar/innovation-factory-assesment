import Button from "@/components/common/button/Button";
import styles from "./FlightResults.module.scss";
import SortIcon from "@/components/common/icons/Sort";
import { useState } from "react";
import FilterTabs from "@/components/common/filterTabs/FilterTabs";
import FlightCard from "../flightCard/FlightCard";
import { LoaderIcon } from "react-hot-toast";
import Loading from "@/components/common/loading/Loading";
import { IPlace } from "@/interfaces/interface.common";
import FlightFilters from "../fliters/FlightFilters";

const FILTERS = [
    { key: 0, label: "Best Price" },
    { key: 1, label: "Best Flights" },
    { key: 2, label: "Short Duration" },
    { key: 3, label: "Departure Time" },
    { key: 4, label: "Arrival Time" },
];

interface FlightResultsProps {
    results: any[];
    pagination: any;
    isFetching: boolean;
    origin: IPlace;
    destination: IPlace
}

const FlightResults = ({ results, isFetching, origin, destination, pagination }: FlightResultsProps) => {
    const [chosenFilter, setChosenFilter] = useState<string | number>(
        FILTERS[0].key
    );
    return (
        <section className={styles["flight-results"]}>
            <div className={styles["content"]}>
                <div className={styles["content__left"]}>
                    {isFetching && (
                        <div className={styles["flight-results__title"]}>
                            <div className={styles["flight-results__fetching"]}>
                                <LoaderIcon />
                                <h3>
                                    Searching for the best flights...
                                </h3>
                            </div>
                        </div>
                    )}
                    {!isFetching && (
                        <>
                            <div className={styles["flight-results__title"]}>
                                <h3>
                                    <b>{pagination && pagination?.total} Flights</b> from {origin?.name} ({origin?.code}) to {destination?.name}
                                    ({destination?.code})
                                </h3>

                                <Button
                                    className={styles["flight-results__sort"]}
                                    variant="primary-outlined"
                                    size="lg"
                                >
                                    <SortIcon />
                                    Top pick from your search
                                </Button>
                            </div>
                            <FilterTabs
                                data={FILTERS}
                                activeTab={chosenFilter}
                                onChange={setChosenFilter}
                            />
                            <div className={styles["flight-results__list"]}>
                                {results.map((flight, i) => (
                                    <FlightCard key={i} data={flight} />
                                ))}
                            </div>
                        </>
                    )}
                </div>
                <div className={styles["content__right"]}>
                    <FlightFilters />
                </div>
            </div>
        </section>
    );
};

export default FlightResults;
