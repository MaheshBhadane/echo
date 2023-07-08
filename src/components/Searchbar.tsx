import { Input } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const Search = () => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#F0F2F5",
                borderRadius: "20px",
                padding: "4px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
            }}
        >
            <Input
                icon={<IconSearch size="1.5rem" />}
                placeholder="Search for new music.."
                variant="unstyled"
            />
        </div>
    );
};

export default Search;
