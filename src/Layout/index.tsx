import Header from "./Header";
import Sidebar from "./SideBar";
import { useRoutes } from "react-router-dom";
import { panelRoute } from "../Routes";

const Layout = () => {
  const routerPanel = useRoutes(panelRoute);

  return (
    <div className="flex flex-row-reverse">
      <div className="flex flex-col gap-4 w-4/5 m-2">
        <Header />
        {routerPanel}
      </div>
      <div className="w-1/5 sticky top-0 m-2 ">
        <Sidebar />
      </div>
    </div>
  );
};

export default Layout;
