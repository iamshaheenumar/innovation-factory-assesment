import Footer from "@/components/common/footer/Footer";
import Header from "@/components/common/header/Header";
import LoginSection from "@/components/login/loginSection/LoginSection";
import Head from "next/head";

const LoginPage = () => {
    return (
        <>
            <Head>
                <title>Flight Booking</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header
                isWhite
                isLoginRegister
            />
            <LoginSection />
            <Footer />
        </>
    );
}

export default LoginPage;