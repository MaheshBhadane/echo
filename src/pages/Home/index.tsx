import React from "react";
import Search from "../../components/ui/Search";
import { CenteredDiv, MainContainer } from "./style";
import { Footer } from "@mantine/core";
import { IconPlayerPause, IconPlayerPlayFilled, IconPlayerTrackPrevFilled } from "@tabler/icons-react";
import { IconPlayerTrackNextFilled } from "@tabler/icons-react";
import SongCardWrapper from "../SongCardWrapper";

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
      <Footer
        height={70}
        withBorder={false}
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          backgroundColor: 'gray',
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div style={{}}>
          <IconPlayerTrackPrevFilled />
          <IconPlayerPlayFilled />
          <IconPlayerPause />
          <IconPlayerTrackNextFilled />
        </div>
      </Footer>
    </>
  );
};

export default Home;
