import React from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  /*function createData(typeDocument, fileName) {
    return { typeDocument, fileName};
  }
  
  const rows = [
      createData('','10177_Cédula.jpg'),
      createData('selfie-photo', '10177_Foto.jpg'),
      
  ];
  */
  function CustomizedTables({metaData}) {
    console.log(metaData) 
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 50 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Cédula</StyledTableCell>
              <StyledTableCell align="right">Foto</StyledTableCell>
              </TableRow>
          </TableHead>
          <TableBody>
            {metaData !== undefined && metaData.length > 0 ? metaData.map((row) => (
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  {row[0].data.filename}
                </StyledTableCell>
                <StyledTableCell align="right">{row[1].data.filename}</StyledTableCell>
               </StyledTableRow>
            )): <StyledTableRow>
            <StyledTableCell component="th" scope="row">
            </StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
           </StyledTableRow>
        }
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  
  export default CustomizedTables;