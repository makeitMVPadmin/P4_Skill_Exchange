import { Box, Text } from "@chakra-ui/react";
import ThemeToggleButton from "./theme-toggle-button";

function Navigation() {
  return (
    <Box style={{ 
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding:20
    }}>
       <Text style={{ fontWeight: "800", fontSize: 18 }}>Launch Academy</Text>
       <ThemeToggleButton/> 
    </Box>
  )
}

export default Navigation