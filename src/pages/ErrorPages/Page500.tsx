import { Title, Container, Group } from "@mantine/core";
import useStyles from "@/pages/ErrorPages/style";
import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";

const Page500 = () => {
  const { classes } = useStyles();

  const handleClick = () => {
    window.location.pathname = "/";
  };

  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.label}>500</div>
        <Title className={classes.title}>Something bad just happened...</Title>
        <Text size="lg" align="center" className={classes.description}>
          Our servers could not handle your request. Don&apos;t worry, our
          development team was already notified. Try refreshing the page.
        </Text>
        <Group position="center">
          <Button variant="white" size="md" onClick={handleClick}>
            Take me Back
          </Button>
        </Group>
      </Container>
    </div>
  );
};

export default Page500;
