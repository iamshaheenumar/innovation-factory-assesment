import Image from "next/image";
import styles from "./StatsSection.module.scss"

const StatsSection = () => {
    return (
        <section className={styles["stats-section"]}>
            <div className={styles["stats-section__content"]}>
                <Image
                    src={"/images/traveller.png"}
                    width={382}
                    height={435}
                    alt={"Traveller image"}
                    className={styles["stats-section__banner"]}
                />

                <div className={styles["stats-section__desc"]}>
                    <h2>With Our Experience <br /> We will Serve You</h2>
                    <p>Lörem ipsum telaliga rera på platögon. Fasegeling ånde sagunar nyponas. Dobel kaning poke. Spenel ösat. Dm:a vikude. </p>
                    <ul>
                        <li>
                            <h6>24k</h6>
                            <p>Travel <br /> Experience</p>
                        </li>
                        <li>
                            <h6>55+</h6>
                            <p>Countries <br /> Serve</p>
                        </li>
                        <li>
                            <h6>50M</h6>
                            <p>Overall USD <br /> Discount</p>
                        </li>
                        <li>
                            <h6>88M</h6>
                            <p>User per <br /> Year</p>
                        </li>
                    </ul>

                </div>
            </div>
        </section>
    );
}

export default StatsSection;