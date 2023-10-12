import { Outlet } from "react-router-dom";

const LayautPrincipal = () => {
  return (
    <div className="container text-center">
      <Outlet />
      <footer>Desarrollado por Hemer Meza</footer>
    </div>
  );
};
export default LayautPrincipal;
