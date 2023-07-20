import React from "react";
import Search from "../../components/UI/Search";
import { CenteredDiv, MainContainer } from "./style";
import SongCardWrapper from "../SongCardWrapper";
import FooterPage from "../../components/Footer/Footer";

const Home: React.FC = () => {

  return (
    <>
      <CenteredDiv>
        <MainContainer>
          <Search />
        </MainContainer>
      </CenteredDiv>
      <div style={{ padding: "20px" }}>
        <SongCardWrapper />
      </div>
      <FooterPage/>
    </>
  );
};

export default Home;
