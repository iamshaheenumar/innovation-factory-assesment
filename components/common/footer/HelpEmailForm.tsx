import Button from "../button/Button";
import SendIcon from "../icons/Send";
import styles from "./Footer.module.scss";

const HelpEmailForm = () => {
    return (
        <form className={styles["help-email"]}>
            <input placeholder="Input your email here" type="text" />
            <button>
                <SendIcon />
            </button>
        </form>
    );
};

export default HelpEmailForm;
