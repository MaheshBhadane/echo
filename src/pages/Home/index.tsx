import React from "react";
import { CenteredDiv, MainContainer } from "@/pages/Home/style";
import FooterPage from "@/components/Footer";
import Search from "@/components/ui/Search";
import SongCardWrapper from "@/pages/SongCardWrapper";

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
