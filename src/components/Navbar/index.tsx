import { rem } from "@mantine/core";
import { NavLink, useLocation } from "react-router-dom";
import useStyles from "@/components/Navbar/style";
import MenuOptions from "@/components/Menu";
import Search from "@/components/ui/Search";
import { useMediaQuery } from "@mantine/hooks";

const HEADER_HEIGHT = rem(70);

const Navbar = () => {
  const { classes } = useStyles();
  const isMobile = useMediaQuery("(max-width: 640px)");
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  
  return (
    <header style={{ height: HEADER_HEIGHT, backgroundColor: "#77a2ff" }}>
      <nav className={classes.inner}>
        <NavLink to="/" style={{
          cursor: "pointer", color: '#ffffff'
        }}>
          <h2>Echo Player</h2>
        </NavLink>
        {!isMobile && isHomePage  ? (
          <div style={{ width: "30rem" }}>
            <Search />
          </div>
        ) : (
          <></>
        )}
        <MenuOptions />
      </nav>
    </header>
  );
};

export default Navbar;
