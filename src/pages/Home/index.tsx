import React from "react";
import { CenteredDiv, MainContainer } from "@/pages/Home/style";
import FooterPage from "@/components/Footer";
import Search from "@/components/ui/Search";
import SongCardWrapper from "@/components/SongCardWrapper";
import { useAppSelector } from "@/app/hooks";
import { RootState } from "@/app/store";
import { useMediaQuery } from "@mantine/hooks";

const Home: React.FC = () => {
  const { currentSong } = useAppSelector((state: RootState) => state.songs);
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <>
      {isMobile ? (
        <CenteredDiv>
          <MainContainer>
            <Search />
          </MainContainer>
        </CenteredDiv>
      ) : (
        <></>
      )}
      <div
        style={{ padding: "20px", paddingTop: `${!isMobile ? "50px" : "0px"}` }}
      >
        <SongCardWrapper />
      </div>
      {currentSong && <FooterPage />}
    </>
  );
};

export default Home;
