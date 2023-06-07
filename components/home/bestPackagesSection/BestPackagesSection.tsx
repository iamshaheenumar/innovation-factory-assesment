import styles from "./BestPackagesSection.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import BestPackageCard from "./BestPackageCard";
import CheveronRight from "@/components/common/icons/CheveronRight";
import { useCallback, useRef, useState } from "react";
import CheveronLeft from "@/components/common/icons/CheveronLeft";

const PACKAGES = [
    { bg: "/images/package-1.png", price: "$1200", name: "Entrance Gate in Istanbul", place: "Turkey" },
    { bg: "/images/package-2.png", price: "$1650", name: "Plaza de espana in seville", place: "Spain" },
    { bg: "/images/package-3.png", price: "$1500", name: "Tower Bridge in London", place: "UK" },
    { bg: "/images/package-4.png", price: "$2400", name: "Taj Mahal building in Agra", place: "India" },
    { bg: "/images/package-1.png", price: "$1200", name: "Entrance Gate in Istanbul", place: "Turkey" },
    { bg: "/images/package-2.png", price: "$1650", name: "Plaza de espana in seville", place: "Spain" },
    { bg: "/images/package-3.png", price: "$1500", name: "Tower Bridge in London", place: "UK" },
    { bg: "/images/package-4.png", price: "$2400", name: "Taj Mahal building in Agra", place: "India" },
]

const BestPackagesSection = () => {
    const [activeSlide, setActiveSlide] = useState(0)
    const sliderRef = useRef<any>(null);
    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current?.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current?.swiper.slideNext();
    }, []);
    return (
        <section className={styles["best-packages"]}>
            <div className={styles["best-packages__content"]}>
                <div className={styles.top}>
                    <h2>
                        Best Packages <br />
                        For You
                    </h2>
                    <p>
                        Lörem ipsum krorat ekosiv och sende anime då cringe. Detisk. Egonat. Diren den eftersom sojaren, men poligam.
                    </p>

                    <div className={styles["best-packages__actions"]}>
                        <button disabled={activeSlide === 0} className="packages-swiper-button-prev" onClick={handlePrev}>
                            <CheveronLeft />
                        </button>

                        <button disabled={activeSlide === PACKAGES.length - 4} className="packages-swiper-button-next" onClick={handleNext}>
                            <CheveronRight width="11.8" height="22.17" color="#ffffff" />
                        </button>
                    </div>
                </div>


                <div>
                    <Swiper
                        ref={sliderRef}
                        spaceBetween={50}
                        slidesPerView={4}
                        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
                        navigation={{
                            nextEl: '.packages-swiper-button-next',
                            prevEl: '.packages-swiper-button-prev',
                        }}
                    >

                        {PACKAGES.map((item: any) => (
                            <SwiperSlide>
                                <BestPackageCard {...item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

        </section>
    );
}

export default BestPackagesSection;