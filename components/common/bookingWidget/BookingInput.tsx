import { HTMLProps, ReactNode, useEffect, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import styles from "./BookingWidget.module.scss";
import Button from "../button/Button";

interface BookingInputProps extends HTMLProps<HTMLInputElement> {
    label: string;
    id: string;
    icon: ReactNode;
    lg?: boolean;
    options?: { label: string; value: string }[];
    selectedVal?: string;
    onOptionSelect?: (
        val: string | { adults: number; childs: number; infants: number }
    ) => void;
}

// AutoComplete
const Autocomplete = ({
    label,
    id,
    icon,
    lg,
    options,
    onOptionSelect,
    selectedVal,
    ...restProps
}: BookingInputProps) => {
    const [isAutocompleteOpen, setAutoCompleteOpen] = useState(false);
    const [value, setValue] = useState("");

    useEffect(() => {
        const newValue = options?.find(item => item.value === selectedVal)?.label;
        if (newValue && newValue !== value) {
            setValue(newValue);
        }
    }, [selectedVal])

    const handleOptionChose = (option: { value: string; label: string }) => {
        setValue(option.label);
        onOptionSelect && onOptionSelect(option.value);
        setAutoCompleteOpen(false);
    };

    const results = value
        ? options?.filter((option) =>
            option.label.toLowerCase().includes(value.toLowerCase())
        )
        : options;
    return (
        <OutsideClickHandler onOutsideClick={() => setAutoCompleteOpen(false)}>
            <div
                className={`${styles["booking-input"]} ${lg ? styles["booking-input--lg"] : ""
                    }`}
            >
                <label htmlFor={id}>{label}</label>
                <div className={styles["booking-input__icon-input"]}>
                    <i>{icon}</i>
                    <input
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        onFocus={() => setAutoCompleteOpen(true)}
                        id={id}
                        {...restProps}
                    />
                </div>
                {isAutocompleteOpen && (
                    <ul className={styles["booking-input__results"]}>
                        {results?.map((option) => (
                            <li key={option.value} onClick={() => handleOptionChose(option)}>
                                {option.label}
                            </li>
                        ))}
                        {results?.length === 0 && (
                            <li className={styles["no-result"]}>No Results</li>
                        )}
                    </ul>
                )}
            </div>
        </OutsideClickHandler>
    );
};

// DatePicker
const DatePicker = ({
    label,
    id,
    icon,
    lg,
    onOptionSelect,
    ...restProps
}: BookingInputProps) => {
    return (
        <div
            className={`${styles["booking-input"]} ${lg ? styles["booking-input--lg"] : ""
                }`}
        >
            <label htmlFor={id}>{label}</label>
            <div className={styles["booking-input__icon-input"]}>
                <i>{icon}</i>
                <input
                    id={id}
                    onChange={(e) => onOptionSelect && onOptionSelect(e.target.value)}
                    {...restProps}
                />
            </div>
        </div>
    );
};

// Travellers
const Travellers = ({
    label,
    id,
    icon,
    lg,
    options,
    onOptionSelect,
    ...restProps
}: BookingInputProps) => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [value, setValue] = useState("");

    const [adults, setAdults] = useState(1);
    const [childs, setChilds] = useState(0);
    const [infants, setInfants] = useState(0);

    const handleApply = () => {
        let passengerCountText = `${adults + childs + infants} Passengers`

        if (!childs && !infants) {
            passengerCountText = `${adults} Adults`;
        } else if (childs && !infants) {
            passengerCountText = `${adults} Adult, ${childs} Children`;
        } else if (!childs && infants) {
            passengerCountText = `${adults} Adult, ${infants} Infant`;
        }

        setValue(passengerCountText);

        onOptionSelect && onOptionSelect({
            adults,
            childs,
            infants,
        });
        setMenuOpen(false);
    };



    return (
        <OutsideClickHandler onOutsideClick={() => setMenuOpen(false)}>
            <div
                className={`${styles["booking-input"]} ${lg ? styles["booking-input--lg"] : ""
                    }`}
            >
                <label htmlFor={id}>{label}</label>
                <div className={styles["booking-input__icon-input"]}>
                    <i>{icon}</i>
                    <input
                        value={value}
                        readOnly
                        onFocus={() => setMenuOpen(true)}
                        id={id}
                        {...restProps}
                    />
                </div>
                {isMenuOpen && (
                    <div className={styles["booking-input__travellers-menu"]}>
                        <div>
                            <h6>Adults</h6>
                            <ul>
                                {[1, 2, 3, 4, 5, 6].map((item) => (
                                    <li
                                        className={item === adults ? styles.active : ""}
                                        onClick={() => setAdults(item)}
                                        key={item}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h6>Children</h6>
                            <ul>
                                {[0, 1, 2, 3, 4].map((item) => (
                                    <li
                                        className={item === childs ? styles.active : ""}
                                        onClick={() => setChilds(item)}
                                        key={item}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h6>Infants</h6>
                            <ul>
                                {[0, 1, 2].map((item) => (
                                    <li
                                        className={item === infants ? styles.active : ""}
                                        onClick={() => setInfants(item)}
                                        key={item}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Button
                            className={styles["booking-input__travellers-menu__apply-btn"]}
                            variant="primary"
                            type="button"
                            onClick={handleApply}
                        >
                            Apply
                        </Button>
                    </div>
                )}
            </div>
        </OutsideClickHandler>
    );
};

export default { Autocomplete, DatePicker, Travellers };
