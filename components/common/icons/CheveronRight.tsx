import { IconProps } from "@/interfaces/interface.common";

const CheveronRight = ({ color, ...props }: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="14"
            fill="none"
            viewBox="0 0 8 14"
            {...props}
        >
            <path
                fill={color || "#1A97D4"}
                d="M1.17 14a1 1 0 00.78-.37l4.83-6a1 1 0 000-1.27l-5-6A1.001 1.001 0 00.24 1.64L4.71 7 .39 12.36A1 1 0 001.17 14z"
            ></path>
        </svg>
    );
}

export default CheveronRight;