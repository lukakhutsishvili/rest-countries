const Arrow = ({ dark }: { dark: boolean }) => {
  return (
    <svg
    className="ml-auto"
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.875 2.875L5 5.75L2.125 2.875L1.25 3.75L5 7.5L8.75 3.75L7.875 2.875Z"
        fill={dark ? "white" : "black"}
      />
    </svg>
  );
};

export default Arrow;
