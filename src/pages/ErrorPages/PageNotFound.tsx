import { Title, Container, Group } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import error from "@/assets/404.gif";
import Cookies from "js-cookie";
import useStyles from "@/components/Navbar/style";
import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";

const PageNotFound = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();

  const handleClick = () => {
    if (Cookies.get("user")) {
      navigate("home");
    } else {
      navigate("/");
    }
  };

  return (
    <Container className={classes.root}>
      <div className={classes.label}>
        <img src={error} alt="PageNotFound" height={"200px"} />
      </div>
      <Title className={classes.title}>You have found a secret place.</Title>
      <Text
        color="dimmed"
        size="lg"
        align="center"
        className={classes.description}
      >
        Unfortunately, this is only a 404 page. You may have mistyped the
        address, or the page has been moved to another URL.
      </Text>
      <Group position="center">
        <Button variant="gradient" size="md" onClick={handleClick}>
          Take Me Back
        </Button>
      </Group>
    </Container>
  );
};

export default PageNotFound;
