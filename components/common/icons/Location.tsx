import { IconProps } from "@/interfaces/interface.common";

const LocationIcon = (props: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="16"
            fill="none"
            viewBox="0 0 12 16"
            {...props}
        >
            <path
                fill="#1A97D4"
                d="M5.82 15a.658.658 0 001.099 0c4.115-5.92 4.876-6.54 4.876-8.738A5.413 5.413 0 006.384.852a5.395 5.395 0 00-5.412 5.41c0 2.199.733 2.819 4.848 8.738zm.564-6.483a2.226 2.226 0 01-2.255-2.255c0-1.24.986-2.254 2.255-2.254a2.261 2.261 0 012.254 2.254 2.243 2.243 0 01-2.254 2.255z"
            ></path>
        </svg>
    );
}

export default LocationIcon;