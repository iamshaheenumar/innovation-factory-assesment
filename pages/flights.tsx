import Footer from "@/components/common/footer/Footer";
import Header from "@/components/common/header/Header";
import FlightsBanner from "@/components/flights/flightsBanner/FlightsBanner";
import LoginSection from "@/components/login/loginSection/LoginSection";
import Head from "next/head";

const FlightsPage = () => {
    return (
        <>
            <Head>
                <title>Flights Search | Flight Booking</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header isWhite />
            <FlightsBanner />

            <Footer />
        </>
    );
}

export default FlightsPage;