import { IconProps } from "@/interfaces/interface.common";

const HomestayIcon = (props: IconProps) => {
    return (<svg
        xmlns="http://www.w3.org/2000/svg"
        width="27"
        height="25"
        viewBox="0 0 27 25"
        {...props}
    >
        <path
            d="M22.494 2.078A.942.942 0 1021.85.307L6.154 6.014V1.192A.942.942 0 005.21.25H3.327a.942.942 0 00-.942.942v6.194l-1.264.459a.942.942 0 00.643 1.771l20.73-7.538z"
        ></path>
        <path
            fillRule="evenodd"
            d="M2.408 11.387L21.23 4.543v4.3l5.033 1.83a.942.942 0 11-.644 1.771l-.62-.226v10.647h.942a.942.942 0 110 1.885H1.442a.942.942 0 110-1.885h.943V11.396l.023-.007v-.002zM21.23 22.864V10.847l1.884.685v11.332H21.23zM9.923 15.326a.942.942 0 00-.943.942v5.654c0 .52.422.942.943.942h3.769a.942.942 0 00.942-.942v-5.654a.942.942 0 00-.942-.942h-3.77z"
            clipRule="evenodd"
        ></path>
    </svg>);
}

export default HomestayIcon;