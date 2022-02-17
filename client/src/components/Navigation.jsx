import React,{useState} from "react";
import { Link } from "react-router-dom";
import {AiFillHome} from 'react-icons/ai'
import {FaTicketAlt} from 'react-icons/fa'
import {BsFillPeopleFill} from 'react-icons/bs'
import {FaBalanceScale,FaHistory} from 'react-icons/fa'
import "bootstrap/dist/css/bootstrap.css";
import "./componentsStyle/Navigation.css";import { useEffect } from "react";
;
const Navigation = (props) => {
  const[page,setPage] = useState("home")
  const handleNavItem = () =>{
    const path = window.location.pathname
    console.log(path.split("/")[1])
    setPage(path.split("/")[1])

  }
  const logOutUser = ()=>{
    localStorage.clear();
    window.location.reload();
  }
  

  useEffect(() => {
  handleNavItem()
  }, [])
  
  return (
    
      <div
        style={{ width: "240px", minHeight: "100vh" }}
        className="bar d-flex align-items-start flex-column flex-shrink-0 p-2 text-white all-bg "
      >
        <Link
          to={""}
          className="d-flex align-items-start mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-4 regular-link">Management</span>
        </Link>

        <ul
          style={{ width: "100%" }}
          className="nav nav-pills flex-column align-items-start mb-auto"
        >
          <li className="active-link">
            <Link to={"/home"} onClick={()=>setPage("home")} className={page=="home"?"nav-link active-link":"nav-link regular-link"}>
              <AiFillHome className="nav-icon"/> Home
            </Link>
          </li>
          <li>
            <Link to={"/cereri"} onClick={()=>setPage("cereri")} className={page=="cereri"?"nav-link active-link":"nav-link regular-link"}>
              <FaTicketAlt className="nav-icon"/>Administrare Cereri
            </Link>
          </li> 
          <li>
            <Link to={"/administrare-conturi"} onClick={()=>setPage("administrare-conturi")} className={page=="administrare-conturi"?"nav-link active-link":"nav-link regular-link"}>
             <BsFillPeopleFill className="nav-icon"/> Administrare Conturi
            </Link>
          </li>
          <li>
            <Link to={"/istoric"} onClick={()=>setPage("istoric")} className={page=="istoric"?"nav-link active-link":"nav-link regular-link"}>
             <FaHistory className="nav-icon"/> Istoric Cereri
            </Link>
          </li>
          <li>
            <Link to={"/termeni-si-conditii"} onClick={()=>setPage("termeni-si-conditii")} className={page=="termeni-si-conditii"?"nav-link active-link":"nav-link regular-link"}>
             <FaBalanceScale className="nav-icon"/> Termeni si Conditii
            </Link>
          </li>
         <li className="align-self-center justify-self-end position-absolute bottom-0 mb-2"><button onClick={logOutUser} className="btn btn-outline-secondary ">Logout</button></li>
          
        </ul>
      </div>
  
  );
};
export default Navigation;
