import React,{ useState ,useEffect} from "react";
import Navigation from "./Navigation.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cereri from "./Cereri.jsx";
import Istoric from "./Istoric.jsx";
import "./componentsStyle/Main.css";
import { UserContext } from "../contexts/userContext";
import { requests } from "../apiCalls/api.js";
import Administrare from "./Administrare.jsx";
const Main = (props) => {
  const [users, setUsers] = useState({name:"John"});
  useEffect(() => {
    requests.get("/")
    .then(res=>{setUsers(res.data)})
    }, []);
  
  return (
    <UserContext.Provider value={{ users, setUsers }}>
      <div className="main">
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/cereri" element={<Cereri />} />
            <Route path="/istoric" element={<Istoric/>}/>
            <Route path="/administrare-conturi" element={<Administrare/>}/> 
          </Routes>
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
};
export default Main;
