import "./styles.css";
import ShoppingList from "./ShoppingList";
import Home from "./Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { Chip, Box } from "@mui/material";
import Connection from "./Connection";

export default function App() {
  const navigate = useNavigate();

  function handleClickHome() {
    navigate("/");
  }

  return (
    <div className="App">
      <h1 className="appTitle">App of Small Apps</h1>
      <p>Cours ReactJS S16</p>
      <p>diii</p>

      <Chip
        icon={<HomeIcon />}
        label="Home"
        variant="outlined"
        onClick={handleClickHome}
      />

      <Box sx={{ mt: 2 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shopping-list" element={<ShoppingList />} />
          <Route path="/connection" element={<Connection />} />
        </Routes>
      </Box>
    </div>
  );
}
