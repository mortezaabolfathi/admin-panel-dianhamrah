import Header from './Header'
import Sidebar  from './SideBar'
import { useRoutes} from "react-router-dom";
import { panelRoute } from '../Routes'

const Layout = () => {
  const routerPanel = useRoutes(panelRoute)


  return (
    <>
   <div className='flex flex-col gap-10'>
        <Header/>
        <Sidebar/>
        {routerPanel}
    </div>
    </>
  )
}

export default Layout

