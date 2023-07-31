import { Center, Flex, Paper, PasswordInput, Title } from "@mantine/core";
import { Controller, useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";
import useStyles from "@/pages/Login/style";
import TextInput from "@/components/ui/TextInput";
import { validationRules } from "@/pages/Login/helper";
import Button from "@/components/ui/Button";
import main from "@/assets/hero.svg";
import Image from "@/components/ui/Image";

const Login = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<Inputs>();

  const navigate = useNavigate();

  const submitHandler = (data: Inputs) => {
    const { email } = data;
    Cookies.set("authUser", email, {
      expires: new Date(Date.now() + 10000 * 60000)
    });
    navigate(0);
  };

  const { classes } = useStyles();
  return (
    <Center>
      <Flex justify={"center"} align={"center"} gap={"5rem"}>
        {!isMobile && (
          <Image maw={450} height={500} src={main} alt="Hero" fit="contain" />
        )}
        <Paper radius={0}>
          <Title
            order={2}
            className={classes.title}
            ta="center"
            mt="md"
            mb={50}
          >
            Welcome back to Echo!
          </Title>

          <form onSubmit={handleSubmit(submitHandler)}>
            <Controller
              control={control}
              name="email"
              rules={{ required: true }}
              render={({ field }) => (
                <TextInput
                  label="Email address"
                  placeholder="hello@gmail.com"
                  size="md"
                  {...field}
                  error={errors?.email?.message}
                  {...register("email", validationRules.email)}
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              rules={{ required: true }}
              render={({ field }) => (
                <PasswordInput
                  label="Password"
                  placeholder="Your password"
                  mt="md"
                  size="md"
                  {...field}
                  error={errors?.password?.message}
                  {...register("password", validationRules.password)}
                />
              )}
            />

            <Button
              variant="gradient"
              color="#90CAF9"
              type="submit"
              fullWidth
              mt="xl"
              size="md"
            >
              Login
            </Button>
            <Image
              my={50}
              maw={400}
              height={200}
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvu90J_0gAthBDvgn0Q-RSK2xZK2pIcvRJAg&usqp=CAU"
              }
              fit="contain"
              alt="Musician"
            />
          </form>
        </Paper>
      </Flex>
    </Center>
  );
};

export default Login;
