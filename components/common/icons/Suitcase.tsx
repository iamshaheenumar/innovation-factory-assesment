import { IconProps } from "@/interfaces/interface.common";

const SuitcaseIcon = (props: IconProps) => {
    return (<svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="25"
        viewBox="0 0 28 25"
        {...props}
    >
        <path
            d="M15.472 17.944H12.75a1.365 1.365 0 01-1.361-1.36H1.875v5.444a2.73 2.73 0 002.722 2.722h19.042a2.73 2.73 0 002.722-2.722v-5.445h-9.528c0 .749-.612 1.361-1.36 1.361zM25 5.694h-5.444A5.443 5.443 0 0014.11.25a5.443 5.443 0 00-5.444 5.444H3.222A2.73 2.73 0 00.5 8.417V12.5a2.713 2.713 0 002.722 2.722h8.167v-1.36c0-.75.612-1.362 1.361-1.362h2.722c.749 0 1.361.613 1.361 1.361v1.361H25a2.73 2.73 0 002.722-2.722V8.417A2.73 2.73 0 0025 5.694zm-13.611 0a2.73 2.73 0 012.722-2.722 2.73 2.73 0 012.722 2.722h-5.458.014z"
        ></path>
    </svg>);
}

export default SuitcaseIcon;