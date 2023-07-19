/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { IconSearch } from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import { Input } from "@mantine/core";
import { searchSongs } from "../../reducers/songsSlice";
import {ThunkDispatch} from "@reduxjs/toolkit";

const Search = () => {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

    const handleSearch = (trackName: string) => {
      dispatch(searchSongs({ trackName, offset: 0 }));
    };
  
    return (
      <Input
        style={{
          color: "white",
          backgroundColor: "#DAE1EC",
          borderRadius: "20px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.)",
        }}
        icon={<IconSearch size="1.5rem" />}
        radius="lg"
        placeholder="Search for new music.."
        variant="unstyled"
        size="sm"
        onChange={(event) => handleSearch(event.currentTarget.value)} 
      />
    );
  };
  
  export default Search;
  