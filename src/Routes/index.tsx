// import SignIn from "../pages/SingIn";

import AddUser from "../pages/PanelAdmin/Adduser";
import ManageUser from "../pages/PanelAdmin/ManageUser";
import AddCertification from "../pages/PanelAdmin/AddCertification";
import SupporterUser from "../pages/PanelAdmin/SupporterUser";
import HomePanelAdmin from "../pages/PanelAdmin/Home";
import Blog from "../pages/PanelAdmin/Blog";
import LibraryAndLow from "../pages/PanelAdmin/LibraryLaw";
import Courses from "../pages/PanelAdmin/Courses";


// export const SingInRout = [{ path: "/SignIn", element: <SignIn /> }];

export const panelRoute = [
  { path: "/DashboardHome", element: <HomePanelAdmin /> },
  { path: "/addUser", element: <AddUser /> },
  { path: "/manageUser", element: <ManageUser /> },
  { path: "/addCertification", element: <AddCertification /> },
  { path: "/supporterUser", element: <SupporterUser /> },
  { path: "/blog", element: <Blog /> },
  { path: "/libraryAndLow", element: <LibraryAndLow/> },
  { path: "/courses", element: <Courses/> },
];

