import { rem } from "@mantine/core";
import { NavLink } from "react-router-dom";
import useStyles from "@/components/Navbar/style";
import MenuOptions from "@/components/Menu";

const HEADER_HEIGHT = rem(60);

const Navbar = () => {
    const { classes } = useStyles();
    return (
        <header style={{ height: HEADER_HEIGHT, backgroundColor: "#DAE1EC" }}>
            <nav className={classes.inner}>
                <NavLink to="/" style={{ cursor: "pointer" }}>
                    <h2>Echo Player</h2>
                </NavLink>
                <MenuOptions />
            </nav>
        </header>
    );
};

export default Navbar;
