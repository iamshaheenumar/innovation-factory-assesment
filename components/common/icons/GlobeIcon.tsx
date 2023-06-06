import { IconProps } from "@/interfaces/interface.common";

const GlobeIcon = (props: IconProps) => {
    return (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="17"
        fill="none"
        viewBox="0 0 17 17"
    >
        <path
            strokeWidth="1.5"
            d="M8.25 15.5a7.25 7.25 0 000-14.5m0 14.5a7.25 7.25 0 010-14.5m0 14.5c1.977 0 2.636-3.296 2.636-7.25 0-3.955-.659-7.25-2.636-7.25m0 14.5c-1.977 0-2.636-3.296-2.636-7.25C5.614 4.295 6.273 1 8.25 1m-6.59 9.886h13.18M1.66 5.614h13.18"
        ></path>
    </svg>);
}

export default GlobeIcon;