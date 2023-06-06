import Image from "next/image";
import styles from "./FeaturesSection.module.scss"

const BRANDS = [
    { id: "1", name: "Axon", image: "/images/brands/brand-1.svg" },
    { id: "2", name: "JetStar", image: "/images/brands/brand-2.svg" },
    { id: "3", name: "Exedia", image: "/images/brands/brand-3.svg" },
    { id: "4", name: "Qantas", image: "/images/brands/brand-4.svg" },
    { id: "5", name: "Alitalia", image: "/images/brands/brand-5.svg" },
]

const BrandsList = () => {
    return (
        <div className={styles["brands-list"]}>
            {
                BRANDS.map(({ name, image, id }) => (
                    <div key={id} className={styles["brands-list__brand-container"]}>
                        <Image
                            src={image}
                            width={130}
                            height={46}
                            alt={`${name} Logo`}
                            style={{ objectFit: "contain" }}
                        />
                    </div>
                ))
            }


        </div>
    );
}

export default BrandsList;