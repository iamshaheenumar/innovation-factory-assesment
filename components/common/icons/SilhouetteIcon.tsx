import { IconProps } from "@/interfaces/interface.common";

const SilhouetteIcon = (props: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="16"
      viewBox="0 0 12 16"
      {...props}
    >
      <path
        d="M5.965 6.2a2.7 2.7 0 100-5.4 2.7 2.7 0 000 5.4zM1.12 13.785a1.102 1.102 0 01-.512-1.057 5.402 5.402 0 0110.717 0 1.1 1.1 0 01-.513 1.056A8.958 8.958 0 015.965 15.2a8.958 8.958 0 01-4.846-1.415z"
      ></path>
    </svg>
  );
};

export default SilhouetteIcon;
