import Arrow from "../components/arrow";
import Search from "../components/search";
import { Link } from "react-router-dom";
import { HomeProps } from "../types";
import { useState } from "react";

const Home: React.FC<HomeProps> = ({
  dark,
  handledark,
  data,
  value,
  handlevalue,
}) => {
  const [show, setshow] = useState(false);

  const handleshow = () => {
    setshow(!show);
  };
  {
    /*const handleRegions = () => {
    let regions: String[] = [];

    data.forEach((country) => {
      const region = country.region;
      if (region && region.trim() !== "" && !regions.includes(region)) {
        regions.push(region);
      }
    });

    console.log(regions);
  };
handleRegions()*/
  }

  const [region, setregion] = useState("");

  const handleRegionFilter = (region: string) => {
    setregion(region);
  };

  const filteredData = data.filter((item) => {
    return (
      item.name.toLowerCase().includes(value.toLowerCase()) &&
      (region === "" || item.region === region)
    );
  });

  console.log(filteredData);
  return (
    <main
      className={`pt-6 pb-16 px-4 large:py-12 large:px-20 ${
        dark ? "text-white bg-zinc-800" : "bg-slate-100"
      }`}
    >
      <div className=" large:flex large:justify-between">
        <form className=" large:min-w-form">
          <div className={` relative  `}>
            <Search dark={dark} handledark={handledark} />
            <input
              value={value}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handlevalue(e)
              }
              className={`p-input w-full outline-none rounded-md shadow-input text-small large:text-mid font-normal ${
                dark && "bg-darkheader "
              }`}
              type="text"
              placeholder="Search for a country…"
            />
          </div>
        </form>
        <div
          className={`large:m-0 large:min-w-52 hover:cursor-pointer relative flex justify-between p-filter text-small font-normal  mt-10 mr-36 rounded-md items-center shadow-input ${
            dark ? "bg-darkheader " : "bg-white"
          }`}
          onClick={handleshow}
        >
          <p className="leading-5">{`Filter by Region ${
            region ? `(${region})` : ""
          }`}</p>
          <Arrow dark={dark} />
          <div
            className={` absolute flex flex-col gap-2 w-full mt-4 top-9 px-6 py-4 left-0 rounded-md shadow-input  ${
              dark ? "bg-darkheader " : "bg-white"
            } ${show ? "block" : "hidden"}`}
          >
            <p
              className="text-xs large:text-mid font-normal hover:cursor-pointer hover:font-bold transition-all duration-300 "
              onClick={() => handleRegionFilter("Africa")}
            >
              Africa
            </p>
            <p
              className="text-xs large:text-mid font-normal hover:cursor-pointer hover:font-bold  transition-all duration-300"
              onClick={() => handleRegionFilter("Americas")}
            >
              America
            </p>
            <p
              className="text-xs large:text-mid font-normal hover:cursor-pointer hover:font-bold  transition-all duration-300"
              onClick={() => handleRegionFilter("Asia")}
            >
              Asia
            </p>
            <p
              className="text-xs large:text-mid font-normal hover:cursor-pointer hover:font-bold  transition-all duration-300"
              onClick={() => handleRegionFilter("Europe")}
            >
              Europe
            </p>
            <p
              className="text-xs large:text-mid font-normal hover:cursor-pointer hover:font-bold  transition-all duration-300"
              onClick={() => handleRegionFilter("Oceania")}
            >
              Oceania
            </p>
          </div>
        </div>
      </div>
      <div className=" large:px-0 large:mt-12 large:flex flex-wrap px-9 mt-8  grid gap-10 large:gap-gap ">
        {filteredData.map((country, index) => {
          return (
            <Link to={"/" + country.name} key={index}>
              <div
                className={` large:w-div large:h-height  rounded-md shadow-div overflow-hidden ${
                  dark ? "bg-darkheader " : "bg-white"
                }`}
              >
                <img
                  className="w-full large:w-div large:h-40"
                  src={country.flags.png}
                />
                <div className=" pt-6 pb-11 pl-6">
                  <h1 className=" font-bold text-lg ">{country.name}</h1>
                  <p className=" text-sm leading-4 font-semibold mt-4">
                    Population:
                    <span className=" font-light"> {country.population}</span>
                  </p>
                  <p className=" text-sm leading-4 font-semibold mt-2">
                    Region:
                    <span className=" font-light"> {country.region}</span>
                  </p>
                  <p className=" text-sm leading-4 font-semibold mt-2">
                    Capital:
                    <span className=" font-light"> {country.capital}</span>
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default Home;
