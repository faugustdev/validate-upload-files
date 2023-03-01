import  React, {useState} from "react";
import { Button} from "@material-ui/core";
import { Box } from "@mui/system";
import { Badge } from '@material-ui/core';
import CustomizedTables from "./Table";
import Typography from '@material-ui/core/Typography';
import logoVippo from "./Logo 131x131.png"
import ScaleLoader from "react-spinners/ScaleLoader";
import CloudOffOutlinedIcon from '@mui/icons-material/CloudOffOutlined';
import CloudDoneOutlinedIcon from '@mui/icons-material/CloudDoneOutlined';
import "./index.css";




let dataMeta = ([])
function App() {
  
  const [successNumber, setsuccessNumber] = useState(0);
  const [errorNumber, seterrorNumber] = useState(0);
  const fetchDataN = async () => {
    const response = await fetch('http://192.168.1.203:8080/bus-services/api/inquiry_upload', {method: 'POST'})
    if (!response.ok) {
      throw new Error ('No se obtuvieron datos!')
    }
    let numberResponse = await response.json()
    setsuccessNumber(numberResponse.success)
    seterrorNumber(numberResponse.error)
    }
  
  fetchDataN();
  
  let [loading, setLoading] = useState(false);
  const [metaData, setMetaData] = useState([])
  const fetchData = async () => {
    setLoading(!loading);
    setMetaData([]);
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
    <>
        <Box
          m={1}
          display="flex"
          justifyContent="center"
          alignItems="center">
          <img alt="logo ViPPO" src={logoVippo} />
        </Box>
    <div style={{ width: '100%', display:'flex', flexWrap:'nowrap', justifyContent:'center' }}>

          <Box
          justifyContent={'center'}
          sx={{display: 'flex',
          flexWrap: 'nowrap',
          p: 1.5,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
          }}>
          <item>
            <Badge badgeContent={successNumber} color="primary">
            <CloudDoneOutlinedIcon/>
          </Badge>
          </item> 
          </Box>
          <Box
          justifyContent={'center'}
          sx={{display: 'flex',
          flexWrap: 'nowrap',
          p: 1.5,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
          }}>

          <item>
          <Badge badgeContent={errorNumber} color="secondary">
              <CloudOffOutlinedIcon />
          </Badge>
          </item>
          </Box>
      </div>


    <div>
        <Box
          m={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
          padding={0.5}>
          <div className="section-change">
            {!loading ? <Button
              color="primary"
              variant="contained"
              size="large"
              onClick={fetchData}
              disabled={loading}
              className='button-charge'
            >
              Cargar
            </Button> : ''}

            {loading ? <ScaleLoader
              color="#638C3D"
              loading={loading}
              size={10}
              aria-label="Loading Spinner"
              data-testid="loader"
              speedMultiplier={1} /> : ''}
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
          metaData={metaData.success} />
        <Box
          m={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h6" noWrap>{message1}</Typography>
        </Box>
        <CustomizedTables
          metaData={metaData.error} />
      </div>
      </>
  );
};


export default App;
