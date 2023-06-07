import { IconProps } from "@/interfaces/interface.common";

const UsersIcon = (props: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="20"
            fill="none"
            viewBox="0 0 22 20"
            {...props}
        >
            <path
                fill="#1A97D4"
                d="M7.4 7.6a3.6 3.6 0 100-7.2 3.6 3.6 0 000 7.2zm9 1.2a3 3 0 100-6 3 3 0 000 6zM.938 17.714a1.469 1.469 0 01-.683-1.41 7.203 7.203 0 0114.29 0c.07.56-.207 1.104-.684 1.409A11.943 11.943 0 017.4 19.6a11.943 11.943 0 01-6.462-1.886zM16.4 17.2h-.127c.084-.356.105-.733.057-1.12a8.964 8.964 0 00-1.905-4.505 5.403 5.403 0 017.049 3.163.981.981 0 01-.432 1.176A8.958 8.958 0 0116.4 17.2z"
            ></path>
        </svg>
    );
}

export default UsersIcon;