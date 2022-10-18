import React from "react";
import { Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";

const Routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/404" element={<NotFound />}></Route>
      <Route path="/@username">
        <Route index element={<Home />}></Route>
      </Route>
    </Routes>
  );
};

export default Routes;
