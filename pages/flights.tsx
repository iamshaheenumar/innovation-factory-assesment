import Footer from "@/components/common/footer/Footer";
import Header from "@/components/common/header/Header";
import FlightResults from "@/components/flights/flightResults/FlightResults";
import FlightsBanner from "@/components/flights/flightsBanner/FlightsBanner";
import API_URLS from "@/constants/apiUrls";
import { CITIES, SELECTED_TRIP } from "@/constants/common";
import { IPlace } from "@/interfaces/interface.common";
import api from "@/utils/api";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

interface FlightsPageProps {
    query: {
        adults: string;
        childs: string;
        infants: string;
        departureDate: string;
        returnDate: string;
        origin: string;
        destination: string;
    },
    destination: IPlace;
    origin: IPlace;

}

const FlightsPage = ({ query, origin, destination }: FlightsPageProps) => {
    const [flights, setFlights] = useState([]);
    const [pagination, setPagination] = useState<any>(null);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        sessionStorage.removeItem(SELECTED_TRIP)
        getFlights();
    }, []);

    const getFlights = async () => {
        setIsFetching(true);
        const reqData = {
            type: "Return",
            class: "Economy",
            adults: query?.adults || "1",
            childs: query?.childs || "0",
            infants: query?.infants || "0",
            tours: [
                {
                    departureDate: query?.departureDate,
                    returnDate: query?.returnDate,
                    airportOriginCode: query?.origin || "DXB",
                    airportDestinationCode: query?.destination || "CCJ",
                },
            ],
        };
        try {
            const res = await api.post(API_URLS.FLIGHTS, reqData);
            if (res.data.status) {
                setFlights(res.data.data.flights);
                setPagination(res.data.data.pagination_details);
            }
        } catch (error) {
            if (typeof error === "string") toast.error(error);
        } finally {
            setIsFetching(false)
        }
    };

    return (
        <>
            <Head>
                <title>Flights Search | Flight Booking</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header isWhite />
            <FlightsBanner />
            <FlightResults pagination={pagination} origin={origin} destination={destination} results={flights} isFetching={isFetching} />
            <Footer />
        </>
    );
};

export default FlightsPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { query } = context;

    const origin = CITIES.find(city => city.code === query?.origin) || { name: "Dubai", code: "DXB" }
    const destination = CITIES.find(city => city.code === query?.destination) || { name: "Calicut", code: "CCJ" }

    return { props: { query, destination, origin } };
};
