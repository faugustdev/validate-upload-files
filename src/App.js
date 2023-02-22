import  React, {useState} from "react";
import { Button } from "@material-ui/core";
import { Box } from "@mui/system";
import CustomizedTables from "./Table";


/*function callApi(){
}*/


let dataMeta = []
function App() {
  
  const [metaData, setMetaData] = useState([])
  const fetchData = async () => {
    const response = await fetch('http://192.168.1.203:8080/bus-services/api/bulk_upload', {method: 'POST'})
    if (!response.ok) {
      throw new Error ('No se obtuvieron datos!')
    }
    dataMeta = await response.json()
    setMetaData(dataMeta)
  }
  /*useEffect(() => {
    
  }, [dataMeta])*/
  return (
    <div>
      <Box
      m={1}
      display="flex"
      justifyContent="center"
      alignItems="center"
      onClick={fetchData}
      >
      <Button
      color="primary"
      variant="contained"
      size="large"
      > 
      Cargar </Button>

      </Box>
      Cargados con exito
      <CustomizedTables
      metaData = {metaData.success} 
      />
      Con error
      <CustomizedTables
      metaData = {metaData.error} 
      />
      
    </div>
  );
};


export default App;
