import { Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Logo from "../images/Logo.png";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Link
      component="button"
      underline="none"
      flexDirection="column"
      justifyContent="flex-start"
      sx={{ width: "100%", height: "100%", marginX: 10, marginY: 8 }}
      onClick={() => navigate("/")}
    >
      <img src={Logo} alt="Musicolor logo" />
    </Link>
  );
};

export default Header;
