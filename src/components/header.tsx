

type HeaderProps = {
  dark: boolean;
  handledark: () => void;
};

const Header: React.FC<HeaderProps> = ({ dark, handledark }) => {
  return (
    <div
      className={`px-4 py-7 large:px-20 large:py-6 flex justify-between items-center shadow-header ${
        dark && " bg-darkheader text-white"
      }`}
    >
      <h2 className=" text-large font-extrabold large:text-2xl">Where in the world?</h2>
      <div className="flex items-center">
        <svg
          onClick={handledark}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.8426 11.052C7.73486 11.052 5.21543 8.74226 5.21543 5.89457C5.21543 4.82024 5.57343 3.82526 6.18514 3C3.75229 3.75612 2 5.86498 2 8.35045C2 11.4708 4.75943 14 8.16286 14C10.8743 14 13.1757 12.3945 14 10.1636C13.1 10.7238 12.0129 11.052 10.8426 11.052Z"
            fill="white"
            stroke={dark ? "white" : "#111517"}
          />
        </svg>
        <p className="ml-2 text-sm font-semibold large:text-mid">Dark Mode</p>
      </div>
    </div>
  );
};

export default Header;
