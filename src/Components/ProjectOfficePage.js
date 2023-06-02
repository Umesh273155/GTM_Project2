import "./Style.css/ProjectOfficePage.css";

import "./Style.css/ATCPage.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import User5 from "../Container/User5";
import CardPage from "./CardPage";
import { useSelector } from "react-redux";

import Ellipse14_6 from "../Images/Ellipse14_6.png";

function ProjectOfficePage() {
  const useremail = useSelector((state) => state.userSlice.user.email);

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("/api/data/getProjectOffice")
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
        {" "}
        <CardPage />
        <div className="atcs-section" style={{ margin: "20px 0 0 0", padding: "0 0" }}>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <h1>
              <i className="hello_">Project Office under you</i>
            </h1>
            <h3 style={{ marginTop: "10px", marginRight: "4rem" }}>
              <p className="user_email_project">{useremail}</p>
            </h3>
          </div>
          <div className="addfilter__input_box_" style={{ marginTop: "20px", marginBottom: "0" }}>
            <input type="text" id="input__box_" placeholder=" Search for a ATC's by name"></input>
            <select style={{ textDecoration: "none", border: "none", outline: "none", backgroundColor: "white", marginLeft: "15px" }}>
              <option>Add Filter </option>
              <option disabled>Name</option>
              <option disabled>ID</option>
              <option disabled>Email</option>
            </select>
          </div>
          <div className="userDetails_Box" style={{ display: "flex", marginTop: "0" }}>
            <div className="users_Box" style={{ marginTop: "0" }}>
              <section className="table_section" style={{ margin: "0 0", padding: "0 0" }}>
                <table className="table__box_" id="school_table_box_" style={{border:"1px solid grey",height:"220px"}}>
                  <thead>
                    <tr id="table_row">
                      <th className="header_profile">profile</th>
                      <th className="header_name" style={{ width: "100%", paddingLeft: "0", marginRight: "0", paddingRight: "1px", height: "40px" }}>
                        Name
                      </th>

                      <th className="header_id" style={{ width: "100%" }}>
                        ID
                      </th>

                      <th className="header_email" style={{ width: "100%" }}>
                        Email
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {array.map((item) => {
                      return (
                        <tr className="trow" onClick={() => setSelectedUsers(item)} style={{ height: "20px" }}>
                          <td>
                            <img src={Ellipse14_6} alt="#" className="user-image"></img>
                          </td>
                          <td  style={{ paddingLeft: "0", marginRight: "0", paddingRight: "5px" }}>{item.name}</td>
                          <td style={{ paddingLeft: "0" }}> {item._id}</td>
                          <td style={{ paddingLeft: "10px", paddingRight: "5px" }}>{item.email}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </section>
            </div>
            <User5 selectedUsers={selectedUsers} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProjectOfficePage;
