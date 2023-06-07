import Button from "@/components/common/button/Button";
import styles from "./TopViewSection.module.scss";
import CheveronRight from "@/components/common/icons/CheveronRight";
import SilhouetteIcon from "@/components/common/icons/SilhouetteIcon";
import CalenderIcon from "@/components/common/icons/Calender";
import LocationIcon from "@/components/common/icons/Location";
import Image from "next/image";

const TopViewSection = () => {
    return (
        <section className={styles["top-view-section"]}>
            <div className={styles.content}>

                <div className={styles.left}>
                    <h2>Top view of <br />
                        mountains</h2>
                    <p>Lörem ipsum fotobomba minynat. Göra en pudel masar fadogon heteroktigt holatt. </p>
                    <div className={styles["user-details"]}>
                        <div>
                            <SilhouetteIcon />
                            Jimmy Paul
                        </div>
                        <div>
                            <CalenderIcon width="12.64" height="14.44" />
                            2 April 2023
                        </div>
                        <div>
                            <LocationIcon />
                            Switzerland
                        </div>
                    </div>

                    <Button variant="primary" size="lg">
                        View More
                        <i className={styles["cta-icon"]}>
                            <CheveronRight />
                        </i>
                    </Button>
                </div>
                <div className={styles.right}>
                    <Image
                        src={"/images/top-of-view-banner.png"}
                        width={773}
                        height={385}
                        alt={`Banner`}
                    />
                </div>
            </div>
        </section>
    );
}

export default TopViewSection;