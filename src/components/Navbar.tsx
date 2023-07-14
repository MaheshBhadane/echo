import { createStyles, Header, Container, rem, Button } from "@mantine/core";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { IconLogout } from "@tabler/icons-react";
import Cookies from "js-cookie";
import MenuOptions from "./Menu";

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
    inner: {
        height: HEADER_HEIGHT,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: "50px",
        paddingLeft: "50px",
    },

    links: {
        [theme.fn.smallerThan("sm")]: {
            display: "none",
        },
    },

    burger: {
        [theme.fn.largerThan("sm")]: {
            display: "none",
        },
    },

    link: {
        display: "block",
        lineHeight: 1,
        padding: `${rem(8)} ${rem(12)}`,
        borderRadius: theme.radius.sm,
        textDecoration: "none",
        color:
            theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        "&:hover": {
            backgroundColor:
                theme.colorScheme === "dark"
                    ? theme.colors.dark[6]
                    : theme.colors.gray[0],
        },
    },

    linkLabel: {
        marginRight: rem(5),
    },
}));

const Navbar = () => {
    const { classes } = useStyles();
    const location = useLocation();
    const navigate = useNavigate();

    const isHomePage = location.pathname === "/";
    const isProfilePage = location.pathname === "/profile";

    const handleLogout = () => {
        Cookies.remove("authUser");
        navigate(0)
    };

    return (
        <Header height={HEADER_HEIGHT} sx={{ backgroundColor: "#DAE1EC" }}>
            <Container className={classes.inner} fluid>
                <NavLink to="/" style={{ cursor: "pointer" }}>
                    <h2>Echo Player</h2>
                </NavLink>
                {isHomePage ?
                    <MenuOptions />
                    : null}
                {isProfilePage ? (
                    <Button
                        radius="lg"
                        h={30}
                        size="lg"
                        onClick={handleLogout}
                        leftIcon={<IconLogout size="1.5rem" color="#f8f8fb" />}
                    >
                        LogOut
                    </Button>
                ) : null}
            </Container>
        </Header>
    );
};

export default Navbar;
