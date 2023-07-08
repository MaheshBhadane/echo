import {
    createStyles,
    Header,
    Container,
    Group,
    Button,
    rem,
    Avatar,
} from "@mantine/core";
import { IconUserCircle } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";

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
            theme.colorScheme === "dark"
                ? theme.colors.dark[0]
                : theme.colors.gray[7],
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

export function Navbar() {
    const { classes } = useStyles();

    return (
        <Header height={HEADER_HEIGHT} sx={{ backgroundColor: "#DAE1EC" }}>
            <Container className={classes.inner} fluid>
                <NavLink to="/" style={{ cursor: "pointer" }}>
                    <h2>Echo Player</h2>
                </NavLink>{" "}
                <NavLink to="login">
                    <Button radius="lg" h={30} size="lg">
                        <IconUserCircle size="1.5rem" color="#f8f8fb" /> Login
                    </Button>
                </NavLink>
            </Container>
        </Header>
    );
}
