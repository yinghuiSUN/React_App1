import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

class Home extends React.Component {
  render() {
    return (
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Link to="/shopping-list">Shopping list</Link>
        <Link to="/Connection">Connection</Link>
        <Link to="/DepartementList">DepartementList</Link>
        <Link to="/MoviesDatabase">MoviesDatabase</Link>
      </Box>
    );
  }
}

export default Home;
