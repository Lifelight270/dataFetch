import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
// import UserList from "./UserList";
// import { Grid, TextField, InputAdornment } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";

const Home = () => {
 

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Home;
