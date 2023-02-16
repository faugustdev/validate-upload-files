import { React } from "react";
import { Button } from "@material-ui/core";
import { Box } from "@mui/system";
import CustomizedTables from "./Table";

function callApi(){
  fetch('https://api.github.com/users/augustbassfa/repos', {method: 'GET'})
  .then((response) => response.json())
  .then((data) => console.log(data));

 
}


function App() {
    return (
    <div>
      


      <Box
      m={1}
      display="flex"
      justifyContent="center"
      alignItems="center"
      onClick={callApi}
      >
      <Button
      color="primary"
      variant="contained"
      size="large"
      > 
      Cargar </Button>

      </Box>
      
      <CustomizedTables

      />
      
    </div>
  );
}


export default App;
