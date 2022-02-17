import React from "react";
import "./componentsStyle/Administrare.css";
import { motion } from "framer-motion";
const AdministrareCard = ({ user, index ,setUserInfo,numberOfRequests}) => {
  return (
    <motion.div layout className="card client-card">
      <div className="p-1 small d-flex align-items-start justify-content-start">
        <div className="col d-flex justify-content-start">
          <label className=" text-nowrap small fw-bold">
            Nume Client
          </label>
        </div>
        <div className="col text-secondary d-flex justify-content-start">{user.firstname} {user.lastname}</div>
      </div>
      <div className="row p-1 small">
        <div className="col d-flex justify-content-start">
          <label className=" text-nowrap small fw-bold">
            Email
          </label>
        </div>
        <div className="col text-secondary d-flex justify-content-start">{user.email}</div>
      </div>
      <div className="row p-1 small">
        <div className="col d-flex justify-content-start">
          <label className=" text-nowrap small fw-bold">
            Telefon
          </label>
        </div>
        <div className="col text-secondary d-flex justify-content-start">{user.phone}</div>
      </div>
      <div className="d-flex align-items-center flex-column justify-content-center card-edits">
        <button onClick={()=>{setUserInfo(user)}} className="w-75 btn btn-outline-primary mb-2">Edit User</button> 
        <div className="statistics d-flex w-100">
            <div className="stat border">Cereri:</div>
            <div className="stat border">{numberOfRequests[index]}</div>
        </div>
      </div>
     
    </motion.div>
  );
};

export default AdministrareCard;
