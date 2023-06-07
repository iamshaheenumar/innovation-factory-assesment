import CheckoutStepper from "@/components/checkout/checkoutStepper/CheckoutStepper";
import PassengerForm from "@/components/checkout/passengerForm/PassengerForm";
import Container from "@/components/common/container/Container";
import Footer from "@/components/common/footer/Footer";
import Header from "@/components/common/header/Header";
import Head from "next/head";

const CheckoutPage = () => {
    return (
        <>
            <Head>
                <title>Checkout | Flight Booking</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header isWhite />
            <Container>
                <CheckoutStepper />
                <PassengerForm />
            </Container>
            <Footer />
        </>
    );
}

export default CheckoutPage;