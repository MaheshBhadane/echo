import React from "react";
import { CenteredDiv, MainContainer } from "@/pages/Home/style";
import FooterPage from "@/components/Footer";
import Search from "@/components/ui/Search";
import SongCardWrapper from "@/components/SongCardWrapper";
import { useAppSelector } from "@/app/hooks";
import { RootState } from "@/app/store";

const Home: React.FC = () => {
  const { currentSong } = useAppSelector(
    (state: RootState) => state.songs
  );
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
      {currentSong && 
      <FooterPage/>}
    </>
  );
};

export default Home;
