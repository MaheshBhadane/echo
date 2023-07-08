import { Button, Container, Text, Title } from "@mantine/core";
import { NavLink } from "react-router-dom";
import Banner from "../../assets/banner.jpg";

const Hero = () => {
    return (
        <div
            style={{
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                height: "100vh",
                width: "100vw",
                position: "relative"
            }}
        >
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url(${Banner})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            />
            <Container
                size="sm"
                style={{
                    maxWidth: "600px",
                    textAlign: "center",
                    color: "#fff",
                    marginTop: "30vh",
                    zIndex: 1
                }}
            >
                <Title style={{ marginBottom: "10px" }}>Echo Player</Title>
                <Text style={{ marginBottom: "20px" }}>
                    A simple Music Player with a powerful playlist manager..!!
                </Text>
                <NavLink to="home" style={{ color: "#fff" }}>
                    <Button variant="gradient" size="lg" radius="xl">
                        Get started
                    </Button>
                </NavLink>
            </Container>
        </div>
    );
};

export default Hero;
