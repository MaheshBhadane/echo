/* eslint-disable @typescript-eslint/no-misused-promises */
import {
    Paper,
    createStyles,
    TextInput,
    PasswordInput,
    Button,
    Title,
    rem,
} from "@mantine/core";
import { useForm } from "react-hook-form";
import { validationRules } from "./helper";
import Cookies from "js-cookie";
import { loginUser } from "../../utils";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type Inputs = {
    email: string;
    password: string;
};

const useStyles = createStyles((theme) => ({
    wrapper: {
        minHeight: rem(900),
        backgroundSize: "cover",
        backgroundImage:
            "url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80)",
    },

    form: {
        borderRight: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
            }`,
        minHeight: rem(900),
        maxWidth: rem(450),
        paddingTop: rem(80),

        [theme.fn.smallerThan("sm")]: {
            maxWidth: "100%",
        },
    },

    title: {
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily!}`,
    },
}));

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const navigate = useNavigate();

    useEffect(() => {
        if (Cookies.get("user")) {
            navigate("home");
        }
    }, [navigate]);

    const submitHandler = (data: Inputs) => {
        loginUser(data?.email);
        window.location.reload();
    };

    const { classes } = useStyles();
    return (
        <div className={classes.wrapper}>
            <Paper className={classes.form} radius={0} p={30}>
                <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
                    Welcome back to Echo!
                </Title>

                <form onSubmit={handleSubmit(submitHandler)}>
                    <TextInput
                        label="Email address"
                        placeholder="hello@gmail.com"
                        size="md"
                        error={errors?.email?.message}
                        {...register("email", validationRules.email)}
                    />
                    <PasswordInput
                        label="Password"
                        placeholder="Your password"
                        mt="md"
                        size="md"
                        error={errors?.password?.message}
                        {...register("password", validationRules.password)}
                    />
                    <Button type="submit" fullWidth mt="xl" size="md">
                        Login
                    </Button>
                </form>
            </Paper>
        </div>
    );
};

export default Login;
