import { useState } from "react";
import Header from "./components/header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Page from "./pages/page";
import Data from "./data.json";

function App() {
  const [dark, setdark] = useState<boolean>(false);
  const handledark = () => {
    setdark(!dark);
  };

  const [value, setvalue] = useState<string>("");

  const handlevalue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setvalue(event.target.value);
  };

  return (
    <>
      <Header dark={dark} handledark={handledark} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              dark={dark}
              handledark={handledark}
              data={Data}
              value={value}
              handlevalue={handlevalue}
            />
          }
        />
        <Route
          path="/:countryName"
          element={
            <Page
              dark={dark}
              handledark={handledark}
              data={Data}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
