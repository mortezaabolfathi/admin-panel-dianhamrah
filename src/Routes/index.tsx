// import SignIn from "../pages/SingIn";
import AddUser from "../pages/PanelAdmin/Adduser";
import ManageUser from "../pages/PanelAdmin/ManageUser";
import AddCertification from "../pages/PanelAdmin/AddCertification";
import SupporterUser from "../pages/PanelAdmin/SupporterUser";
import HomePanelAdmin from "../pages/PanelAdmin/Home";
import SignIn from "../pages/SingIn";

// export const SingInRout = [{ path: "/SignIn", element: <SignIn /> }];

export const panelRoute = [
  { path: "/", element: <HomePanelAdmin /> },
  { path: "/addUser", element: <AddUser /> },
  { path: "/manageUser", element: <ManageUser /> },
  { path: "/addCertification", element: <AddCertification /> },
  { path: "/supporterUser", element: <SupporterUser /> },
];
