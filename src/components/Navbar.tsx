import {
    createStyles,
    Header,
    Container,
    Group,
    Button,
    rem,
} from "@mantine/core";
import { NavLink } from "react-router-dom";

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
    inner: {
        height: HEADER_HEIGHT,
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
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
                <Group >
                    <NavLink to="/">Echo Player</NavLink>{" "}
                </Group>

                <Button radius="lg" h={30} size="lg">
                    <NavLink to="login">Login</NavLink>
                </Button>
            </Container>
        </Header>
    );
}
