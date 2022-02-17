import React, { useState, useEffect } from "react";
import "./componentsStyle/Cerere.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import moment from "moment";
import {IoArrowBackCircleOutline} from 'react-icons/io5'
import { requests } from "../apiCalls/api";
const Cerere = ({ request ,goBack}) => {
  const [newMesaj, setNewMesaj] = useState("");
  const [status, setStatus] = useState("new");
  const [messages, setMessages] = useState([
    {
      created_by: request.client.firstname,
      message: request.details.split("---")[0],
      created_at: request.created_at,
    },
  ]);
  const handleStatus = (e) => {
    setStatus(e.target.id);
    request.status = e.target.id;
    requests
      .put(`/requests/${request.id}`, request)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    requests.get(`/messages/${request.id}`).then((res) => {
      setMessages([...messages, ...res.data]);
    });
  }, []);

  const handleNewMessage = () => {
    
    const newMessage = 
      {
        created_by: "Admin",
        message: newMesaj,
        created_at: moment().format("YYYY-MM-DDThh:mm:ss")
      }
      setMessages([...messages,newMessage])
      requests.post(`/messages/${request.id}`,newMessage)
      .then(res=>console.log(res.data))
    
  };

  return (
    <div className="cerere-wrapper">
      <div className="card-cerere d-flex flex-column mt-3">
        <IoArrowBackCircleOutline className="goback" onClick={()=>goBack(" ")}/>
        <div className="fs-4 text-secondary">Detalii Client</div>
        <div className="divider"></div>

        <div className="row p-1 small">
          <div className="col">
            <label className=" text-nowrap small fw-bold">Nume Client</label>
          </div>
          <div className="col text-secondary">
            {request.client.firstname} {request.client.lastname}
          </div>
        </div>
        <div className="row p-1 small">
          <div className="col">
            <label className=" text-nowrap small fw-bold">Adresa Email</label>
          </div>
          <div className="col text-secondary">{request.client.email}</div>
        </div>
        <div className="row p-1 small">
          <div className="col">
            <label className=" text-nowrap small fw-bold">Numar telefon</label>
          </div>
          <div className="col text-secondary">{request.client.phone}</div>
        </div>
        <div className="row p-1 small">
          <div className="col">
            <label className=" text-nowrap small fw-bold">
              Marca Autoturism
            </label>
          </div>
          <div className="col text-secondary">{request.car.brand}</div>
        </div>
        <div className="row p-1 small">
          <div className="col">
            <label className=" text-nowrap small fw-bold">Tip Autoturism</label>
          </div>
          <div className="col text-secondary">{request.car.model}</div>
        </div>
        <div className="row p-1 small">
          <div className="col">
            <label className=" text-nowrap small fw-bold">An Fabricatie</label>
          </div>
          <div className="col text-secondary">{request.car.year}</div>
        </div>
        <div className="row p-1 small">
          <div className="col">
            <label className=" text-nowrap small fw-bold">Serie VIN</label>
          </div>
          <div className="col text-secondary">{request.car.vin}</div>
        </div>
        <div className="row p-1 small">
          <div className="col">
            <label className=" text-nowrap small fw-bold">
              Numar Inmatriculare
            </label>
          </div>
          <div className="col text-secondary">
            {request.car.registration_plate}
          </div>
        </div>
        <div className="row p-1 small">
          <div className="col">
            <label className=" text-nowrap small fw-bold d-flex flex-row">
              <div>Valabilitate ITP</div>
              <div className="d-flex flex-column ms-2">
                <label> De la </label>
                <label>Pana la </label>
              </div>
            </label>
          </div>
          <div className="col text-secondary d-flex flex-column">
            <label>{moment(request.car.itp_from).format("DD/MM/YYYY")}</label>
            <label>{moment(request.car.itp_to).format("DD/MM/YYYY")}</label>
          </div>
        </div>
        <div className="row p-1 small">
          <div className="col">
            <label className=" text-nowrap small fw-bold d-flex flex-row">
              <div>Valabilitate RCA</div>
              <div className="d-flex flex-column ms-2">
                <label> De la </label>
                <label>Pana la </label>
              </div>
            </label>
          </div>
          <div className="col text-secondary d-flex flex-column">
            <label>{moment(request.car.rca_from).format("DD/MM/YYYY")}</label>
            <label>{moment(request.car.rca_to).format("DD/MM/YYYY")}</label>
          </div>
        </div>
        <div className="row p-1 small">
          <div className="col">
            <label className=" text-nowrap small fw-bold">
              Data Ultimei Revizii
            </label>
          </div>
          <div className="col text-secondary">{request.car.las_revision}</div>
        </div>

        <div className="fs-4 mt-3">Status</div>
        <form className="d-flex small mt-1 justify-content-between">
          <div className="form-check">
            <input
              className="form-check-input input-status"
              type="radio"
              name="status"
              id="new"
              checked={request.status == "new" ? true : false}
              onClick={handleStatus}
              onChange={handleStatus}
            />
            <label className="form-check-label" htmlFor="new">
              New
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input input-status"
              type="radio"
              name="status"
              id="contracted"
              checked={request.status == "contracted" ? true : false}
              onClick={handleStatus}
              onChange={handleStatus}
            />
            <label className="form-check-label" htmlFor="contracted">
              Contracted
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input input-status"
              type="radio"
              name="status"
              id="rejected"
              checked={request.status == "rejected" ? true : false}
              onClick={handleStatus}
              onChange={handleStatus}
            />
            <label className="form-check-label" htmlFor="rejected">
              Rejected
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input input-status"
              type="radio"
              name="status"
              id="complete"
              checked={request.status == "complete" ? true : false}
              onClick={handleStatus}
              onChange={handleStatus}
            />
            <label className="form-check-label" htmlFor="complete">
              Complete
            </label>
          </div>
        </form>
      </div>
      <div className="mesaj-cerere d-flex flex-column mt-4">
        <div className="mesaj-data">
          {moment(request.created_at).format("DD/MM/YYYY")}
        </div>
        <div className="mesaj-field d-flex flex-row px-2 small">
          <div className="d-flex flex-column">
            {messages.map((value, index) => {
              return (
                <div key={index} className="mesaj-ora mb-5">
                  {value.created_at.split("T")[1].split(".")[0]}
                </div>
              );
            })}
          </div>
          <div className="divider-blue"></div>
          <div>
            {messages.map((value, index) => {
              return (
                <div
                  key={index}
                  className="mesaj mb-4 d-flex flex-column w-100 align-items-start"
                >
                  <label className="ms-2">{value.created_by}</label>
                  <label
                    dangerouslySetInnerHTML={{ __html: value.message }}
                    className="ms-4"
                  ></label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ReactQuill theme="snow" value={newMesaj} onChange={setNewMesaj} />
      <button
        style={{ color: "white" }}
        className="btn bg-primary align-self-start justify-self-start mb-2"
        onClick={handleNewMessage}
      >
        Submit
      </button>
      {newMesaj}
    </div>
  );
  /*Nume Client
• Adresa email
• Numar telefon
• Marca Autoturism
• Tip Autoturism
• An fabricatie
• Serie VIN
• Numar inmatriculare
• Valabilitate ITP de la pana la
• Valabilitate RCA de la pana la
• Data ultimei revizii */
};

export default Cerere;
