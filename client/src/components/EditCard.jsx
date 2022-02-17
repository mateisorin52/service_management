import React from "react";
import "./componentsStyle/Administrare.css";
import moment from "moment";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useState } from "react";
import { requests } from "../apiCalls/api";
const EditCard = ({ userInfo, setUserInfo }) => {
  const [user,setUser] = useState({...userInfo,password:""})
  const goBack = () => {
    setUserInfo("");
  };

  

  const saveInfo = (e)=>{
    e.preventDefault()
    requests.put(`/clients/${user.id}`,user,{headers:{
        os:user.os,
        version:user.version,
        token:user.token
    }
    })
    .then(res=>console.log(res))
}
  return (
    <div className="cerere-wrapper">
      <div className="card-cerere d-flex flex-column mt-3">
        <IoArrowBackCircleOutline
          className="goback"
          onClick={() => goBack(" ")}
        />
        <div className="fs-4 text-secondary">Detalii Client</div>
        <div className="divider"></div>
        <div className="row p-1 small">
          <div className="col">
            <label className=" text-nowrap small fw-bold">Nume</label>
          </div>
          <input value={user.lastname} onChange={(e)=>{setUser({...user,lastname:e.target.value})}} className="col"></input>
        </div>
        <div className="row p-1 small">
          <div className="col">
            <label className=" text-nowrap small fw-bold">Prenume</label>
          </div>
          <input value={user.firstname} onChange={(e)=>setUser({...user,firstname:e.target.value})} className="col"></input>
        </div>
        <div className="row p-1 small">
          <div className="col">
            <label className=" text-nowrap small fw-bold">Adresa Email</label>
          </div>
          <input value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})} className="col"></input>
        </div>
        <div className="row p-1 small">
          <div className="col">
            <label className=" text-nowrap small fw-bold">Numar telefon</label>
          </div>
          <input onChange={(e)=>{setUser({...user,phone:e.target.value})}} value={user.phone} className="col"></input>
        </div>
        <div className="row p-1 small">
          <div className="col">
            <label className=" text-nowrap small fw-bold">Parola</label>
          </div>
          <input value={user.password} onChange={(e)=>{setUser({...user,password:e.target.value})}} className="col"></input>
        </div>
        <div className="row p-1 small">
          <div className="col">
            <label className=" text-nowrap small fw-bold">OS</label>
          </div>
          <div className="col w-100">
            <select
              value={user.os}
              onChange={(e)=>{setUser({...user,os:e.target.value})}}
              className="select text-capitalize d-flex justify-content-start align-items-start"
            >
              <option value={"android"}>android</option>
              <option value={"ios"}>ios</option>
            </select>
          </div>
        </div>
        <div className="row p-1 small">
          <div className="col">
            <label className=" text-nowrap small fw-bold">Token</label>
          </div>
          <input
            defaultValue={user.token}
            className="col text-capitalize"
          ></input>
        </div>
        <div className="row p-1 small">
          <div className="col">
            <label className=" text-nowrap small fw-bold">Enabled</label>
          </div>
          <div className="col">
            {" "}
            <input
              onChange={()=>{if(user.enabled)setUser({...user,enabled:0});else setUser({...user,enabled:1});console.log(user)}}
              type="checkbox"
              checked={user.enabled}
              className="col enabled text-secondary"
            ></input>
          </div>
        </div>
        <button onClick={saveInfo} className="btn btn-outline-primary">Save</button>
      </div>
    </div>
  );
};

export default EditCard;
