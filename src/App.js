import  React, {useState} from "react";
import { Button } from "@material-ui/core";
import { Box } from "@mui/system";
import CustomizedTables from "./Table";
import Typography from '@material-ui/core/Typography';
import logoVippo from "./Logo 131x131.png"
import ScaleLoader from "react-spinners/ScaleLoader";
import "./index.css";

let dataMeta = ([])
function App() {

  let [loading, setLoading] = useState(false);
 
  const [metaData, setMetaData] = useState([])
  const fetchData = async () => {
    setLoading(!loading);
    const response = await fetch('http://192.168.1.203:8080/bus-services/api/bulk_upload', {method: 'POST'})
    if (!response.ok) {
      throw new Error ('No se obtuvieron datos!')
    }

    dataMeta = await response.json()
    setMetaData(dataMeta);
    setLoading(false);
  }
  const message = 'Exitosos';
  const message1 = 'Fallidos';
    return (
    <div>
      <Box
        m={1}
        display="flex"
        justifyContent="center"
        alignItems="center">

      <img alt="logo ViPPO" src={logoVippo} />    
      </Box>
      <Box
        m={2}
        display="flex"
        justifyContent="center"
        alignItems="center"
        padding={0.5}>
      <div className="section-change">
      { !loading ? <Button
        color="primary"
        variant="contained"
        size="large"
        onClick={fetchData}
        disabled={loading}
        className='button-charge'
              > 
        Cargar 
        </Button> : '' }
        
        { loading ? <ScaleLoader 
          color="#638C3D"
          loading={loading}        
          size={10}
          aria-label="Loading Spinner"
          data-testid="loader"
          speedMultiplier={1}
        /> : '' }
      </div>
      
     </Box>
      <Box
      m={2}
      display="flex"
      justifyContent="center"
      alignItems="center">
      <Typography variant="h6" noWrap>{message}</Typography>
      </Box>
      <CustomizedTables
      metaData = {metaData.success} 
      />
      <Box
      m={2}
      display="flex"
      justifyContent="center"
      alignItems="center"
      >
      <Typography variant="h6"  noWrap>{message1}</Typography>
      </Box>
      <CustomizedTables
      metaData = {metaData.error} 
      />
      
    </div>
  );
};


export default App;
