import Link from "next/link";
import styles from "./Header.module.scss";
import Button from "../button/Button";
import SilhouetteIcon from "../icons/SilhouetteIcon";
import GlobeIcon from "../icons/GlobeIcon";
import CheveronDown from "../icons/CheveronDown";
import { useRouter } from "next/router";
import { useAuth } from "@/contexts/AuthContext";

interface HeaderProps {
  isWhite?: boolean;
  isLoginRegister?: boolean;
}

const Header = (props: HeaderProps) => {
  const router = useRouter();
  const auth = useAuth();

  const isLogin = router.pathname === "/login";
  const isRegister = router.pathname === "/register";

  const handleLogout = () => auth?.setUserSession("");


  return (
    <header className={`${styles.header} ${props.isWhite ? styles["header--white"] : ""}`}>
      <nav>
        <Link href="/">About</Link>
        <Link href="/">Packages</Link>
        <Link href="/">News</Link>
        <Link href="/">Partners</Link>
        <Link href="/">Contact</Link>
      </nav>

      <div className={styles["header__right"]}>

        {props.isLoginRegister ?
          <>
            <Button className={styles["header__register-btn"]} variant={isRegister ? "primary-outlined" : "text"} onClick={() => router.push("/register")}>Register</Button>
            <Button variant={isLogin ? "primary-outlined" : "text"} onClick={() => router.push("/login")}>
              <SilhouetteIcon className="me-1" />
              Log In</Button>
          </>
          :
          <>
            <div className={styles["header__language-switcher"]}>
              <GlobeIcon className={styles["header__language-switcher-globe"]} />
              English
              <CheveronDown height="5.3" className={styles["header__language-switcher-cheveron"]} />
            </div>
            {
              auth?.userEmail ?
                <Button variant={props.isWhite ? "dark-outlined" : "outlined"} onClick={handleLogout}>
                  <SilhouetteIcon className="me-1" />
                  Logout
                </Button>
                :
                <Button variant={props.isWhite ? "dark-outlined" : "outlined"} onClick={() => router.push("login")}>
                  <SilhouetteIcon className="me-1" />
                  Sign In / Register
                </Button>
            }
          </>
        }
      </div>
    </header>
  )
};

export default Header;
