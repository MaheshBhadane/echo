import { IconSearch } from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import { Input } from "@mantine/core";
import { searchSongs } from "../../reducers/songsSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { debounce } from "lodash";

const Search = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const handleSearch = debounce((trackName: string) => {
    dispatch(searchSongs({ trackName, offset: 0 }));
  }, 500); 

  return (
    <Input
      style={{
        color: "white",
        backgroundColor: "#DAE1EC",
        borderRadius: "20px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
      }}
      icon={<IconSearch size="1.5rem" />}
      radius="lg"
      placeholder="Search for new music.."
      size="sm"
      onChange={(event) => handleSearch(event.currentTarget.value)} 
    />
  );
};

export default Search;
