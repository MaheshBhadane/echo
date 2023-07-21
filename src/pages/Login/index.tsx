import { Paper, PasswordInput, Title } from "@mantine/core";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";
import useStyles from "@/pages/Login/style";
import TextInput from "@/components/ui/TextInput";
import { validationRules } from "@/pages/Login/helper";
import Button from "@/components/ui/Button";

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
            expires: new Date(Date.now() + 10000 * 60000),
        });
        navigate(0);
    };  

    const { classes } = useStyles();
    return (
        <div className={classes.wrapper}>
            {!isMobile && (
                <div>
                    <img src={"https://images.unsplash.com/photo-1618667902266-ac23d555a320?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fG11c2ljJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"} alt="Hero" className={classes.image} />
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
                        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvu90J_0gAthBDvgn0Q-RSK2xZK2pIcvRJAg&usqp=CAU"} alt="Musician" style={{ padding: '50px' }} />
                    </div>
                </form>
            </Paper>
        </div>
    );
};

export default Login;
