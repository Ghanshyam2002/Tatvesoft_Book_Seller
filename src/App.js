import React from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Login from "./component/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./component/Registration";
import Editproduct from "./component/editproduct";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Registration />}></Route>
          <Route exact path="/editproduct" element={<Editproduct/>}></Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
