import { createStyles, rem } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    wrapper: {
        display: "flex",
        height: "100vh",
        '@media (max-width: 640px)': {
            flexDirection: "column",
        },
    },
    form: {
        flex: 1,
        borderRight: `${rem(1)} solid ${theme.colorScheme === "dark"
            ? theme.colors.dark[7]
            : theme.colors.gray[3]
            }`,
        minHeight: "100vh",
        maxWidth: rem(450),
        paddingTop: rem(80),
        margin: "auto",
        '@media (min-width: 640px)': {
            maxWidth: "100%",
            borderRight: "none",
            borderBottom: `${rem(1)} solid ${theme.colorScheme === "dark"
                ? theme.colors.dark[7]
                : theme.colors.gray[3]
                }`,
        },
    },
    title: {
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily!}`,
    },
    imageWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        maxWidth: "100%",
        height: "100vh",
        '@media (max-width: 640px)': {
            visibility: 'hidden'
        },
    },
}));


export default useStyles;
