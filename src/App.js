import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PathNavigator from "./PathNavigator";
 import DashBoardPage from "./Components/DashBoardPage";
import ATCPage from "./Components/ATCPage";
import ProjectOfficePage from "./Components/ProjectOfficePage";
import SchoolClassesPage from "./Components/SchoolClassesPage";
import User1 from "./Container/User1";
import User2 from "./Container/User2";
import User3 from "./Container/User3";
import User4 from "./Container/User4";
import User5 from "./Container/User5";
import User6 from "./Container/User6";
import User7 from "./Container/User7";
import User8 from "./Container/User8";
import User9 from "./Container/User9";
import User10 from "./Container/User10";
import User11 from "./Container/User11";
import User12 from "./Container/User12";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import React, { useEffect } from "react";
import { setUser } from "./reduxx/authslices";
import { useDispatch } from "react-redux";
import axios from "axios";
 import ProtectedRoutes from "./ProtectedRoutes";
function App() {
 
  const dispatch = useDispatch();

  useEffect(() => {
    const getSession = async () => {
      try {
        const response = await axios
          .get("/api/session/getSession")
          .then((response) => dispatch(setUser(response.data)))

          .catch((err) => console.log(err));

        console.log(response);
      } catch (error) {
        // Handle error response
        console.error(error);
      }
    };
    getSession();
  }, []);

  return (
    <>
      <Router>
        <div className="app">
          <Routes>
        
      
        <Route element={<ProtectedRoutes />}>
      
        <Route exact path="/dashboard" element={<><DashBoardPage /></>} />
        </Route>


 {/* <Route exact path="/dashboard" element={<><DashBoardPage /></>} />  */}
            <Route
              path="/atcs"
              element={
                <>
                  {" "}
                  <ATCPage />
                </>
              }
            />
            <Route
              path="/project"
              element={
                <>
                  {" "}
                  <ProjectOfficePage />
                </>
              }
            />
            <Route
              path="/school"
              element={
                <>
                  {" "}
                  <SchoolClassesPage />
                </>
              }
            />
            <Route
              path="/"
              element={
                <>
                  {" "}
                  <PathNavigator />
                </>
              }
            />

            <Route
              path="/user1"
              element={
                <>
                  {" "}
                  <User1 />
                </>
              }
            />
            <Route
              path="/user2"
              element={
                <>
                  {" "}
                  <User2 />
                </>
              }
            />
            <Route
              path="/user3"
              element={
                <>
                  {" "}
                  <User3 />
                </>
              }
            />
            <Route
              path="/user4"
              element={
                <>
                  {" "}
                  <User4 />
                </>
              }
            />
            <Route
              path="/user5"
              element={
                <>
                  {" "}
                  <User5 />
                </>
              }
            />
            <Route
              path="/user6"
              element={
                <>
                  {" "}
                  <User6 />
                </>
              }
            />
            <Route
              path="/user7"
              element={
                <>
                  {" "}
                  <User7 />
                </>
              }
            />
            <Route
              path="/user8"
              element={
                <>
                  {" "}
                  <User8 />
                </>
              }
            />
            <Route
              path="/user9"
              element={
                <>
                  {" "}
                  <User9 />
                </>
              }
            />
            <Route
              path="/user10"
              element={
                <>
                  {" "}
                  <User10 />
                </>
              }
            />
            <Route
              path="/user11"
              element={
                <>
                  {" "}
                  <User11 />
                </>
              }
            />

            <Route
              path="/atcs"
              element={
                <>
                  {" "}
                  <User12 />
                </>
              }
            />
            <Route
              path="/login"
              element={
                <>
                  {" "}
                  <Login />
                </>
              }
            />

            <Route
              path="/signup"
              element={
                <>
                  {" "}
                  <SignUp />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
