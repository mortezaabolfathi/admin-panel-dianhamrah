import { useState } from "react";
import "./App.css";
import Layout from "./Layout";
import SingIn from "./pages/SingIn";


function App() {
  const [loginAdmin, setLoginAdmin] = useState(true)
  // const [data , isLoading ] = useLoginAdminMutation({})
  const handelModalLoginAdmin = () =>{
    // console.log("clike");
    
    // setLoginAdmin(!loginAdmin)
  }
  return ( 
    <>
      <Layout/>
      {
      loginAdmin? <SingIn 
      // handelModalLogin={handelModalLoginAdmin}
      //  openModalLogin={loginAdmin}
       /> : null
      } 
    
    </>
  )}

export default App;
