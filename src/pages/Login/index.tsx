/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { Paper, PasswordInput, Title } from "@mantine/core";
import { useForm } from "react-hook-form";
import { validationRules } from "./helper";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import musicImage from '../../assets/musical-note.png';
import heroImage from '../../assets/hero.jpeg';
import TextInput from "../../components/ui/TextInput";
import { useMediaQuery } from "@mantine/hooks";
import useStyles from "./style";

type Inputs = {
    email: string;
    password: string;
};

const Login = () => {
    const isMobile = useMediaQuery("(max-width: 640px)");

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
            {!isMobile && (
                <div>
                    <img src={heroImage} alt="Hero" className={classes.image} />
                </div>)}
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
                    <div className={classes.imageWrapper} >
                        <img src={musicImage} alt="Musician" style={{ padding: '50px' }} />
                    </div>
                </form>
            </Paper>
        </div>
    );
};

export default Login;
