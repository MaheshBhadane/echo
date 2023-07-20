import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center", 
    gap:'50px',
  },
  loaderContainer: {
    display: 'flex',
    alignitems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  card: {
    width: "100%", 
    maxWidth: "400px",
    backgroundColor: "#DAE1EC",
    [theme.breakpoints.lg]: {
      width: "50%", 
      margin: "20px", 
    },
    [theme.breakpoints.xl]: {
      width: "30%", 
      margin: "30px",
    },
  },
}));

export default useStyles;
