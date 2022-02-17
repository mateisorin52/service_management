import React, { useEffect, useState } from "react";
import "./componentsStyle/Cereri.css";
import { requests } from "../apiCalls/api";
import { UserContext } from "../contexts/userContext";
import { useContext } from "react";
import Cerere from "./Cerere";
import moment from "moment";
const Cereri = () => {
  const newStyle = {
    background: "#ffeacc",
    color: "#ffa053",
    width: "60%",
    borderRadius: "5px",
    fontWeight: "500",
    fontSize: ".9em",
  };
  const contactedStyle = {
    background: "#d2b8ff",
    color: "#893bf3",
    width: "60%",
    borderRadius: "5px",
    fontWeight: "500",
    fontSize: ".9em",
  };
  const rejectedStyle = {
    background: "#FFE4E4",
    color: "#D85555",
    width: "60%",
    borderRadius: "5px",
    fontWeight: "500",
    fontSize: ".9em",
  };
  const completedStyle = {
    background: "#cce7d3",
    color: "#2b9333",
    width: "60%",
    borderRadius: "5px",
    fontWeight: "500",
    fontSize: ".9em",
  };
  const [cerere, setCerere] = useState(" ");
  const [allCereri, setAllCereri] = useState([]);
  const [cereriState, setCereriState] = useState(allCereri);
  const [entries, setEntries] = useState(10);
  const fetchCereri = () => {
    requests.get("/requests").then((res) => {
      setAllCereri(res.data.data);
      setCereriState(res.data.data);
    });
  };
  const searchForName = (e) => {
    var newCereriState = [];
    allCereri.map((value) => {
      if (
        value.status.toLowerCase().includes(e.target.value.toLowerCase()) ||
        value.car.brand.toLowerCase().includes(e.target.value.toLowerCase()) ||
        moment(value.created_at.toLowerCase()).format("DD/MM/YYYY - hh:mm").includes(e.target.value.toLowerCase())||
        value.client.firstname.toLowerCase().includes(e.target.value.toLowerCase())||
        value.client.lastname.toLowerCase().includes(e.target.value.toLowerCase())||
        value.service.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
       {
        newCereriState = [...newCereriState, value];
      }
      setCereriState(newCereriState);
    });
  };
  const displayCerere = (e) => {
    setCerere(cereriState[e.currentTarget.id]);
  };
  const changeEntriesNumber = (e) => {
    let newCereri = [];
    setEntries(e.target.value);
    allCereri.map((value, index) => {
      if (index < e.target.value) newCereri.push(value);
    });
    setCereriState(newCereri);
  };
  const checkFieldsOfData = (instance) => {
    if (instance == undefined) return "";
    else return instance;
  };
  useEffect(() => {
    fetchCereri();
  }, []);

  

  return (
    <div className="cereri-wrapper d-flex justify-content-center align-items-start">
      {cerere == " " ? (
        <div className="cereri-inner d-flex flex-column mt-5 align-items-center">
          <div className="inner-top mt-3 d-flex align-items-center justify-content-between mb-2">
            <div className="show-number m-4">
              <label>Show</label>
              <select
                onChange={changeEntriesNumber}
                className="fs-6 border w-100 border-1 rounded-3"
                value={entries}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
              <label>entries</label>
            </div>
            <div className="me-3">
              <label className="me-2">Search</label>
              <input
                onChange={searchForName}
                className="rounded-3 border-1"
                placeholder=""
              ></input>
            </div>
          </div>
          <div className="inner-table d-flex justify-content-center align-items-center">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Data/Ora</th>
                  <th scope="col">Nume Client</th>
                  <th scope="col">Marca Autoturism</th>
                  <th scope="col">Categoria</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {cereriState.map((cerere, index) => {
                  return (
                    <tr
                      onClick={displayCerere}
                      key={index}
                      id={index}
                      className="table-row"
                    >
                      <th scope="col">{cerere.id}</th>
                      <td>
                        {moment(checkFieldsOfData(cerere).created_at).format(
                          "DD/MM/YYYY - hh:mm"
                        )}
                      </td>
                      <td>
                        {checkFieldsOfData(cerere.client).firstname}{" "}
                        {checkFieldsOfData(cerere.client).lastname}
                      </td>
                      <td>{checkFieldsOfData(cerere.car).brand}</td>
                      <td>{checkFieldsOfData(cerere.service).name}</td>
                      <td className="">
                        <label
                          className="text-capitalize"
                          style={
                            cerere.status == "new"
                              ? newStyle
                              : cerere.status == "contracted"
                              ? contactedStyle
                              : cerere.status == "rejected"
                              ? rejectedStyle
                              : cerere.status == "complete"
                              ? completedStyle
                              : {}
                          }
                        >
                          {cerere.status}
                        </label>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <Cerere goBack={setCerere} request={cerere} />
      )}
    </div>
  );
};

export default Cereri;
