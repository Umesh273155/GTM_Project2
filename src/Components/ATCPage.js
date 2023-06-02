import "./Style.css/ATCPage.css";
import CardPage from "./CardPage";
import User1 from "../Container/User1";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import Ellipse14_4 from "../Images/Ellipse14_4.png";

function ATCPage() {
  const useremail = useSelector((state) => state.userSlice.user.email);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/data/getStudent")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let array = [...data];

  const [selectedUsers, setSelectedUsers] = useState({ ...array[0] });

  return (
    <div className="atcs_main_box" style={{ margin: "0 0", padding: "0 0" }}>
      <div className="atcs_inner_box" style={{ margin: "0 0", padding: "0 0" }}>
        <CardPage />
        <div className="atcs-section" style={{ margin: "20px 0 0 0", padding: "0 0" }}>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <h1 style={{ textAlign: "left" }} className="main-text">
              <i>ATC's under you</i>
            </h1>
            <h3 style={{ marginTop: "10px" }}>
              <p className="user_email_atc">{useremail}</p>
            </h3>
          </div>

          <div className="addfilter_input__box" id="filter_box">
            <input type="text" className="input_box" placeholder=" Search for a ATC's by name"></input>
            <select style={{ textDecoration: "none", border: "none", outline: "none", backgroundColor: "white", marginLeft: "50px" }}>
              <option>Add Filter </option>
              <option disabled>Name</option>
              <option disabled>ID</option>
              <option disabled>Email</option>
            </select>
          </div>
          <div className="userDetails_Box" style={{ display: "flex", margin: "0 0", padding: "0 0" }}>
            <div className="users_Box" style={{ margin: "0 0", padding: "0 0" }}>
              <table style={{ width: "34rem", height: "220px", margin: "24px 20px 0 5%", border: "1px solid grey", borderRadius: "5px" }}>
                <thead>
                  <tr id="table_row">
                    <th>profile</th>
                    <th style={{ width: "100%", textAlign: "center" }}>Name</th>

                    <th style={{ width: "100%" }}>ID</th>

                    <th style={{ width: "100%" }}>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {array.map((itm) => {
                    return (
                      <tr className="trow" onClick={() => setSelectedUsers(itm)}>
                        <td id="ttabledata">
                          {" "}
                          <img src={Ellipse14_4} alt="#" className="user-image"></img>
                        </td>
                        <td id="ttabledata" style={{ paddingLeft: "0", marginRight: "0", paddingRight: "1px", height: "40px" }}>
                          {itm.name}
                        </td>

                        <td id="ttabledata"> {itm._id}</td>

                        <td style={{ paddingLeft: "10px", marginRight: "5px" }} id="ttabledata">
                          {itm.email}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <User1 selectedUsers={selectedUsers} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ATCPage;
