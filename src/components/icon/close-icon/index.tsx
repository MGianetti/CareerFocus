type CloseIconProps = {
  size?: number;
  color?: string;
};

const CloseIcon: React.FC<CloseIconProps> = ({
  size = 24,
  color = "black",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
    >
      <path d="M18.36 6l-6.36 6 6.36 6-1.44 1.44-6.36-6-6.36 6-1.44-1.44 6.36-6-6.36-6L5.64 4l6.36 6L18.36 4z" />
    </svg>
  );
};

export default CloseIcon;
