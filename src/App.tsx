import { useState } from "react";
import "./App.css";
import Layout from "./Layout";
import SingIn from "./pages/SingIn";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const [loginAdmin, setLoginAdmin] = useState(true)

  return ( 
    <>
      <Layout/>
      {
      loginAdmin? <SingIn 
      // handelModalLogin={handelModalLoginAdmin}
      //  openModalLogin={loginAdmin}
       /> : null
      } 
       <ToastContainer />

    </>
  )}

export default App;
