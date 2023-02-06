import {Box} from "@mui/material";
import {Outlet} from "react-router-dom";
import {SearchElement} from "./Header";

const boxStyles = { 
  flexGrow: 1, 
  position: "fixed", 
  width: "100%",
  top: 0
}

const LayoutSearch = () => (
  <Box 
    component="div" 
    sx={{ 
      height: "100vh",
    }}
  >
    <SearchElement boxStyles={boxStyles} />
    <SearchElement />
    <Outlet />
  </Box>
)

export default LayoutSearch;