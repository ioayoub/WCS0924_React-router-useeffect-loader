import { NavLink, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";

function App() {
  type GenericType = {
    id: number;
    name: string;
    [key: string]: string | number;
  };

  const [data, setData] = useState<GenericType[] | null>(null);

  // const data = useLoaderData();

  // Mount

  useEffect(() => {
    fetch("https://ioayoub.fr/api/eshop")
      .then((response) => response.json())
      .then((items) => setData(items))
      .catch((error) => console.log(error));
  }, []);

  // console.log(data);

  // Update / render

  // Unmount

  return (
    <>
      <header>
        <Navbar />
      </header>

      {data ? (
        data.map((d) => <NavLink to={`/article/${d.id}`}>{d.name}</NavLink>)
      ) : (
        <h1 className="text-4xl text-red-500 text-center">
          Chargement en cours
        </h1>
      )}

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
