import FavouriteIcon from "@/components/common/icons/Favourite";
import styles from "./BestPackagesSection.module.scss";
import Button from "@/components/common/button/Button";
import LocationIcon from "@/components/common/icons/Location";
import CalenderIcon from "@/components/common/icons/Calender";
import UsersIcon from "@/components/common/icons/UsersIcon";
interface BestPackageCardProps {
    bg: string;
    price: string;
    name: string;
    place: string;
}
const BestPackageCard = (props: BestPackageCardProps) => {
    return (
        <div className={styles["best-package-card"]}>
            <div
                className={styles.banner}
                style={{ backgroundImage: `url(${props.bg})` }}
            >
                <div className={styles["banner__top"]}>
                    <span>{props.price}</span>
                    <FavouriteIcon />
                </div>
            </div>

            <h4>{props.name}</h4>
            <div className={styles["package-details"]}>
                <div>
                    <LocationIcon height="13" width="9.74" />
                    {props.place}
                </div>
                <div>
                    <CalenderIcon width="11.38" height="13" />
                    3D/4N
                </div>
                <div>
                    <UsersIcon height="13" width="14.41" />
                    People 8
                </div>
            </div>
            <div className={styles.rating}>
                <div>
                    <img src="/images/star.png" />
                    <img src="/images/star.png" />
                    <img src="/images/star.png" />
                    <img src="/images/star.png" />
                    <img src="/images/star.png" />
                </div>
                <span>5.0</span>
                <span>(2.5k Reviews)</span>


            </div>
            <p>
                Lörem ipsum mänement semiosmos. Infrafikuliga regiligt. Timysat.
                Tinade benyrade. Suprangar kror semiliga tragt.{" "}
            </p>
            <Button variant="primary"> Book Now</Button>
        </div>
    );
};

export default BestPackageCard;
