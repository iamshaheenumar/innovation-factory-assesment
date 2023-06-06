import Link from "next/link";
import styles from "./Footer.module.scss";
import HelpEmailForm from "./HelpEmailForm";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles["footer__up"]}>
                <div className={styles["footer__content"]}>
                    <div className={styles["footer__content-left"]}>
                        <h3>Have any question? Let us help you!</h3>
                        <p>Lörem ipsum krorat ekosiv och sende anim</p>
                    </div>
                    <div className={styles["footer__content-right"]}>
                        <HelpEmailForm />
                    </div>
                </div>
            </div>
            <div className={styles["footer__low"]}>
                <div className={styles["footer__low-content"]}>
                    <nav>
                        <Link href="/">About</Link>
                        <Link href="/">Packages</Link>
                        <Link href="/">News</Link>
                        <Link href="/">Partners</Link>
                        <Link href="/">Contact</Link>
                    </nav>

                    <ul className={styles["footer__social-links"]}>
                        <li>
                            <a href="/">
                                <img src="/images/social-icons/fb.svg" alt="Facebook Logo" />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src="/images/social-icons/twitter.svg" alt="Twitter Logo" />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src="/images/social-icons/insta.svg" alt="Instagram Logo" />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src="/images/social-icons/tiktok.svg" alt="Tiktok Logo" />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src="/images/social-icons/mail.svg" alt="Mail icon" />
                            </a>
                        </li>
                    </ul>

                    <p className={styles["footer__copyright"]}>© 2023 Test Powered by <a href="https://innovationfactory.biz/">Innovation Factory</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
