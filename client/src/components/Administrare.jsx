import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { requests } from "../apiCalls/api";
import AdministrareCard from "./AdministrareCard";
import "./componentsStyle/Administrare.css";
import { motion } from "framer-motion";
import EditCard from "./EditCard";
const Administrare = () => {
  const [users, setUsers] = useState([]);
  const [userInfo,setUserInfo] = useState()
  const [requestsState,setRequestsState] = useState();
  const [numberOfRequests,setNumberOfRequests] = useState([])
  useEffect(() => {
    requests.get("/clients").then((res) => {
      setUsers(res.data.data);
      console.log(res.data.data);
    });
  }, []);
  useEffect(() => {
   if(users) requests.get("/requests").then((res)=>{
     users.map(()=>{numberOfRequests.push(0)})
     users.map((user,index)=>{
       res.data.data.map(value=>{
         if(user.id==value.client.id) {numberOfRequests[index]+=1;console.log(user,"---",index,value.client.id)}
       })
       
     })
     setNumberOfRequests([...numberOfRequests])
    })
  }, [users])
  
  return (
    <div className="administrare d-flex justify-content-center">
      {!userInfo?
      <motion.div layout className="administrare-inner mt-4">
        {users.map((value, index) => {
          return <AdministrareCard setUserInfo={setUserInfo} user={value} numberOfRequests={numberOfRequests} index={index} />;
        })}
      </motion.div>:<EditCard setUserInfo={setUserInfo} userInfo={userInfo}/>}
    </div>
  );
};

export default Administrare;
