import Checkbox from "@/components/common/checkbox/Checkbox";
import styles from "./FlightFilters.module.scss"

const FlightFilters = () => {
    return (
        <div className={styles.filters}>
            <div className={styles["filters__header"]}>
                <h2>Filter departing flight</h2>
                <span>Clear All</span>
            </div>
            <div className={styles["filters__body"]}>
                <div>
                    <h6>Stops</h6>
                    <div className={styles["checkbox-group"]}>
                        <Checkbox label="Any" name="stops" id="any" value="any" />
                        <Checkbox label="Direct" name="stops" id="dir" value="dir" />
                        <Checkbox label="1 Stop" name="stops" id="one" value="one" />
                        <Checkbox label="2+ Stops" name="stops" id="more" value="more" />
                    </div>
                </div>

                <div>
                    <h6>Airlines</h6>
                    <div className={styles["checkbox-group"]}>
                        <Checkbox label="Air Arabia Abu Dhabi" name="carrier" id="a" value="a" />
                        <Checkbox label="Air India Limited" name="carrier" id="b" value="b" />
                        <Checkbox label="Etihad Airways" name="carrier" id="c" value="c" />
                        <Checkbox label="Flyadeal" name="carrier" id="d" value="d" />
                        <Checkbox label="Fly Dubai" name="carrier" id="e" value="e" />
                        <Checkbox label="Flynas" name="carrier" id="f" value="f" />
                    </div>
                </div>

            </div>

        </div>
    );
}

export default FlightFilters;