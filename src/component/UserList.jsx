import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

function UserList({ user }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          ID: {user.id}
        </Typography>
        <Typography variant="h6" component="div">
          Name: {user.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Username: {user.username}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default UserList;
