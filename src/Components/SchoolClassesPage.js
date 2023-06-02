import "./Style.css/SchoolClassesPage.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Style.css/ATCPage.css";
import CardPage from "./CardPage";
import Users10 from "../Container2/Users10";
import { useSelector } from "react-redux";

import Ellipse14_8 from "../Images/Ellipse14_8.png";

function SchoolClassesPage() {
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

  let arr = [...data];

  console.log(arr);

  const [selectedUser, setSelectedUser] = useState({ ...arr[0] });

  return (
    <div className="atcs-main-box">
      <div className="atcs-inner-box" style={{ margin: "0 0", padding: "0 0" }}>
        <CardPage />

        <div className="atcs-section" style={{ margin: "20px 0 0 0", padding: "0 0" }}>
          <div className="logged">
            <h3 className="logged_email">{useremail}</h3>
          </div>
          <div className="addfilter-input-box" style={{ marginRight: "0" }}>
            <input type="text" className="input-box" placeholder=" Search for a ATC's by name"></input>

            <select style={{ textDecoration: "none", border: "none", outline: "none", backgroundColor: "white", marginLeft: "80px" }}>
              <option>Add Filter </option>
              <option disabled>Name</option>
              <option disabled>ID</option>
              <option disabled>Email</option>
            </select>
          </div>

          <div className="userDetails-Box" style={{ marginLeft: "0" }}>
            <div className="users_Box" style={{ marginLeft: "0" }}>
              <section className="table_section" style={{ margin: "10px 0", padding: "0 0" }}>
                <table className="table_box" id="school_table_box">
                  <thead>
                    <tr id="table_row">
                      <th className="header_profile">profile</th>
                      <th className="header_name">Name</th>

                      <th className="header_id">ID</th>

                      <th className="header_email">Email</th>
                    </tr>
                  </thead>

                  <tbody>
                    {arr.map((item) => {
                      return (
                        <tr className="trow" onClick={() => setSelectedUser(item)} style={{ height: "40px" }}>
                          <td style={{ height: "40px" }}>
                            <img src={Ellipse14_8} alt="#" className="user-image"></img>
                          </td>
                          <td style={{ paddingLeft: "0", marginRight: "0", paddingRight: "5px", height: "40px" }}>{item.name}</td>
                          <td style={{ paddingLeft: "0", height: "40px" }}> {item._id}</td>
                          <td style={{ paddingLeft: "10px", height: "40px" }}>{item.email}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </section>
            </div>
            <div className="users_div">
              <Users10 selectedUser={selectedUser} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SchoolClassesPage;
