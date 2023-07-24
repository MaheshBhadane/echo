import useStyles from "@/pages/Login/style";
import { Container } from "@mantine/core";
import { Outlet } from "react-router-dom";

const RootLayout = () => {

  const { classes } = useStyles();
  return (
    <Container className={classes.wrapper}>
      <Outlet />
    </Container>
  );
};

export default RootLayout;
