import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { PageProps } from "../types";
import BackArrow from "../components/backArrow";

const Page: React.FC<PageProps> = ({ dark, data }) => {
  const { countryName } = useParams();

  let isCountry;

  if (countryName) {
    isCountry = data.find((country) => country.name === countryName);
    console.log(isCountry);
  }

  return (
    <main
      className={`px-7 py-10 bg large:p-20  ${
        dark ? "text-white bg-zinc-800" : "bg-slate-100"
      }`}
    >
      <Link to={"/"}>
        <button
          className={`px-6 py-2 flex gap-2 items-center rounded-sm shadow-sm  ${
            dark ? "  bg-darkheader" : "bg-white"
          }`}
        >
          <BackArrow dark={dark} />
          <p className=" text-sm font-light">Back</p>
        </button>
      </Link>
      <div className="large:mt-20 large:flex">
        <img
          src={isCountry?.flags.png}
          className=" rounded-sm mt-14 large:mt-0 large:w-img large:h-img large:rounded-md "
        />
        <div className="large:ml-28 large:w-full">
          <div className=" large:flex">
            <div>
              <h3 className="mt-8  text-xLarge font-extrabold large:mt-10 large:text-xlLarge ">
                {isCountry?.name}
              </h3>
              <p className=" text-sm leading-4 font-semibold mt-4 large:mt-6 large:text-base">
                Native Name:
                <span className=" font-light"> {isCountry?.nativeName}</span>
              </p>
              <p className=" text-sm leading-4 font-semibold mt-4">
                Population:
                <span className=" font-light"> {isCountry?.population}</span>
              </p>
              <p className=" text-sm leading-4 font-semibold mt-4">
                Region:
                <span className=" font-light"> {isCountry?.region}</span>
              </p>
              <p className=" text-sm leading-4 font-semibold mt-4">
                Sub Region:
                <span className=" font-light"> {isCountry?.subregion}</span>
              </p>
              <p className=" text-sm leading-4 font-semibold mt-4">
                Capital:
                <span className=" font-light"> {isCountry?.capital}</span>
              </p>
            </div>
            <div className="large:ml-auto">
              <p className=" text-sm leading-4 font-semibold mt-4 large:mt-28">
                Top Level Domain:
                <span className=" font-light">
                  {" "}
                  {isCountry?.topLevelDomain}
                </span>
              </p>
              <p className=" text-sm leading-4 font-semibold mt-4">
                Currencies:
                <span className=" font-light">
                  {" "}
                  {isCountry?.currencies && isCountry?.currencies[0].name}
                </span>
              </p>
              <p className="text-sm leading-4 font-semibold mt-4">
                Languages:
                {isCountry?.languages &&
                  Object.values(isCountry.languages).map((language, index) => (
                    <span
                      className="text-sm leading-4 mt-4  font-light"
                      key={index}
                    >
                      {" "}
                      {language?.name}{" "}
                    </span>
                  ))}
              </p>
            </div>
          </div>
          <div className="large:grid  large:mt-16 large:items-center large:grid-cols-[130px_auto] ">
            <h4 className=" text-base font-semibold mt-8 large:mt-[0px]">Border Countries:</h4>
            <div className="flex flex-wrap gap-x-2  large:flex large:ml-4  large:items-center">
              {isCountry?.borders &&
                isCountry?.borders.map((country, index) => (
                  <div
                    key={index}
                    className={`p-countryDiv mt-4 rounded-sm shadow-md large:mt-0 ${
                      dark ? "  bg-darkheader" : "bg-white"
                    }`}
                  >
                    <p className=" text-small font-light">{country}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
