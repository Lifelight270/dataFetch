import React, { useState, useEffect } from "react";
import axios from "axios";
import UserList from "./component/UserList";
import { Grid, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const CardLayout = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/tasks")
      .then((response) => {
        console.log(response.data); // Check the structure of the data
        setUsers(Array.isArray(response.data) ? response.data : []);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div style={{ margin: "40px auto", maxWidth: "1200px" }}>
      <div style={{ width: "60%", margin: "0 auto" }}>
        <TextField
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search by name or username"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          fullWidth
          style={{ marginTop: "40px", marginBottom: "20px" }}
        />
      </div>
      <h1>Users</h1>
      <Grid container spacing={2}>
        {filteredUsers.map((user) => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <UserList user={user} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CardLayout;
