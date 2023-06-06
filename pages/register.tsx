import Footer from "@/components/common/footer/Footer";
import Header from "@/components/common/header/Header";
import RegisterSection from "@/components/register/registerSection/RegisterSection";
import Head from "next/head";

const RegisterPage = () => {
    return (
        <>
            <Head>
                <title>Register | Flight Booking</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header
                isWhite
                isLoginRegister
            />
            <RegisterSection />
            <Footer />
        </>
    );
}

export default RegisterPage;