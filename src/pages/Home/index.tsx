import React from "react";
import { Container } from "@mantine/core";
import Search from "../../components/Searchbar";

const Home: React.FC = () => {
  return (
    <>
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <main
          style={{
            maxWidth: "800px",
            width: "100%",
            paddingTop: "30px",
            color: "#373b53",
          }}
        >
          <Search />
          <h2 style={{ textAlign: "center" }}>
            Hello, Welcome to My Website..!!
          </h2>
        </main>
      </Container>
    </>
  );
};

export default Home;
