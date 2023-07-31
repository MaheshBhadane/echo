/* eslint-disable @typescript-eslint/naming-convention */
import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    height: "100vh",
    "@media (max-width: 640px)": {
      flexDirection: "column"
    }
  },
  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily!}`
  }
}));

export default useStyles;
