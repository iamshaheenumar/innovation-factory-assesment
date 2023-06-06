import { IconProps } from "@/interfaces/interface.common";

const CheveronDown = (props: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 8"
            {...props}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12.333 1L6.999 6.333 1.666 1"
            ></path>
        </svg>
    );
};

export default CheveronDown;
