/* eslint-disable @typescript-eslint/naming-convention */
import { createStyles, rem } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  inner: {
    height: rem(70),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: "50px",
    paddingLeft: "50px"
  },
  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none"
    }
  },
  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none"
    }
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
          : theme.colors.gray[0]
    }
  },
  linkLabel: {
    marginRight: rem(5)
  },
  root: {
    paddingTop: rem(80),
    paddingBottom: rem(80)
  },

  label: {
    textAlign: "center",
    fontWeight: 900,
    fontSize: rem(220),
    lineHeight: 1,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[4]
        : theme.colors.gray[2],

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(120)
    }
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily!}`,
    textAlign: "center",
    fontWeight: 900,
    fontSize: rem(38),

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(32)
    }
  },

  description: {
    maxWidth: rem(500),
    margin: "auto",
    marginTop: theme.spacing.xl,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`
  }
}));

export default useStyles;
