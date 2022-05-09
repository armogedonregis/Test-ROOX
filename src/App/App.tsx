import React from "react";
import { Route, Routes } from "react-router-dom";
import { withApp } from "../container/withApp/withApp";
import Navbar from "../components/navbar";
import Home from "../pages/home";
import Profile from "../pages/profile";


 function App({users, sortCity, sortCompany, loading}) {
   
  return (
    <Routes>
      <Route path="/" element={<Navbar sortCity={sortCity} sortCompany={sortCompany} />}>
        <Route index element={<Home loading={loading} users={users} />} />
        <Route path="user/:id" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default withApp(App);