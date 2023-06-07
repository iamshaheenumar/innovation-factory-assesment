import { useState } from "react";
import styles from "./BookingWidget.module.scss";
import FlightIcon from "../icons/Flight";
import CarIcon from "../icons/Car";
import HotelIcon from "../icons/Hotel";
import FlightBooking from "./FlightBooking";

interface BookingWidgetProps {
    onlyFlights?: boolean;
}

const BookingWidget = ({ onlyFlights }: BookingWidgetProps) => {
    const [activeTab, setActiveTab] = useState(0);
    const handleTabclick = (val: number) => setActiveTab(val);

    return (
        <div className={styles["booking-wiget"]}>
          {!onlyFlights && (
              <div className={styles["booking-wiget__tabs"]}>
                  <div
                      onClick={() => handleTabclick(0)}
                      className={`${styles["booking-wiget__tab"]} ${activeTab === 0 ? styles["booking-wiget__tab--active"] : ""
                          }`}
                  >
                      <FlightIcon />
                      Flights
                  </div>
                  <div
                      onClick={() => handleTabclick(1)}
                      className={`${styles["booking-wiget__tab"]} ${activeTab === 1 ? styles["booking-wiget__tab--active"] : ""
                          }`}
                  >
                      <HotelIcon />
                      Hotels
                  </div>
                  <div
                      onClick={() => handleTabclick(2)}
                      className={`${styles["booking-wiget__tab"]} ${activeTab === 2 ? styles["booking-wiget__tab--active"] : ""
                          }`}
                  >
                      <CarIcon />
                      Car Rental
                  </div>
              </div>
          )}
          {activeTab == 0 && <FlightBooking />}
      </div>
  );
};

export default BookingWidget;
