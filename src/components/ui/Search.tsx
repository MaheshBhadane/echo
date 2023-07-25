import { IconSearch } from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import { Input } from "@mantine/core";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { debounce } from "lodash";
import { searchSongs } from "@/reducers/songsThunk";

const Search = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const handleSearch = debounce((trackName: string) => {
    dispatch(searchSongs({ trackName, offset: 0 }));
  }, 500); 

  return (
    <Input
      style={{
        backgroundColor: "#5E86DA",
        borderRadius: "20px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
      }}
      icon={<IconSearch size="1.5rem" color="#5E86DA" />}
      radius="lg"
      placeholder="Search for new music.."
      size="sm"
      onChange={(event) => handleSearch(event.currentTarget.value)} 
    />
  );
};

export default Search;
