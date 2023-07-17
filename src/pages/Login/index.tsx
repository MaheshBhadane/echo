/* eslint-disable @typescript-eslint/no-misused-promises */
import {
    Paper,
    createStyles,
    PasswordInput,
    Title,
    rem,
} from "@mantine/core";
import { useForm } from "react-hook-form";
import { validationRules } from "./helper";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import musicImage from '../../assets/musical-note.png'
import heroImage from '../../assets/hero.jpeg'
import TextInput from "../../components/ui/TextInput";


type Inputs = {
    email: string;
    password: string;
};

const useStyles = createStyles((theme) => ({
    wrapper: {
        height: '100%',
        width: '100%',
        // backgroundSize: "cover",
        backgroundImage: `url(${heroImage})`,
    },

    form: {
        borderRight: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
            }`,
        minHeight: rem(712),
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
    imageWrapper: {
        display: "flex",
        justifyContent: "center",
        marginTop: rem(30),
    },
    image: {
        maxWidth: "100%",
        height: "auto",
    },
}));

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const navigate = useNavigate();

    const submitHandler = (data: Inputs) => {
        const { email } = data;
        Cookies.set("authUser", email, {
            expires: new Date(Date.now() + 60000),
        });
        navigate(0);
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
                    <div className={classes.imageWrapper}>
                        <img src={musicImage} alt="Musician" className={classes.image} />
                    </div>
                </form>
            </Paper>
        </div>
    );
};

export default Login;
