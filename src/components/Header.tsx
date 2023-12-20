import { AppBar, Button, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo_img from "../images/logo_img.svg";
const Header = () => {
  const navigate = useNavigate();
  return (
    <AppBar
      position="static"
      sx={{ boxShadow: "none", backgroundColor: "white" }}
    >
      <Toolbar>
        <Button
          size="large"
          aria-label="logo"
          color="inherit"
          sx={{ marginX: 5.5, marginY: 4 }}
          onClick={() => navigate("/")}
        >
          <img src={logo_img} alt="Musicolor logo" />
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
