import { Outlet } from "react-router-dom";

export default function TotoPage() {
  return (
    <>
      <h1 className="text-4xl text-center">Toto page</h1>
      <Outlet />
    </>
  );
}
