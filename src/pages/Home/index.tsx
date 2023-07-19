import React from "react";
import Search from "../../components/ui/Searchbar";
import SongCard from "../SongCard";
import { CenteredDiv, MainContainer } from "./style";

const Home: React.FC = () => {
  return (
    <>
      <CenteredDiv>
        <MainContainer>
          <Search />
        </MainContainer>
      </CenteredDiv>
      <div style={{ padding: "20px" }}>
        <SongCard />
      </div>
    </>
  );
};

export default Home;
