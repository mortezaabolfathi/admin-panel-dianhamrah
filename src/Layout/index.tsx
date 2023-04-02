import Header from "./Header";
import Sidebar from "./SideBar";
import { useRoutes } from "react-router-dom";
import { panelRoute } from "../Routes";

const Layout = () => {
  const routerPanel = useRoutes(panelRoute);
  

  return (
    <div className="flex flex-row-reverse h-full" >
      <div className="flex flex-col gap-4 w-4/5 p-2">
        <Header />
        {routerPanel}
      </div>
      <div className="w-1/5 h-full  sticky top-0 p-2" >
        <Sidebar />
      </div>
      
    </div>
  );
};

export default Layout;