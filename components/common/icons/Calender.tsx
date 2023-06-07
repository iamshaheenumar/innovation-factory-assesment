import { IconProps } from "@/interfaces/interface.common";

const CalenderIcon = (props: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="16"
            fill="none"
            viewBox="0 0 15 16"
            {...props}
        >
            <path
                fill="#1A97D4"
                d="M1.166 5.9a.37.37 0 00-.366.366v7.921c0 .823.64 1.463 1.463 1.463h10.725c.792 0 1.462-.64 1.462-1.463V6.266a.393.393 0 00-.366-.366H1.166zM14.45 4.56V3.461C14.45 2.67 13.78 2 12.988 2h-1.463V.416A.393.393 0 0011.16.05H9.941a.37.37 0 00-.366.366V2h-3.9V.416A.393.393 0 005.31.05H4.091a.37.37 0 00-.366.366V2H2.263C1.44 2 .8 2.67.8 3.462V4.56c0 .214.152.366.366.366h12.918a.37.37 0 00.366-.366z"
            ></path>
        </svg>
    );
}

export default CalenderIcon;