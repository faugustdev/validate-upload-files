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
  
  function createData(typeDocument, fileName) {
    return { typeDocument, fileName};
  }
  
  const rows = [
      createData('document-photo','10177_Cédula.jpg'),
      createData('selfie-photo', '10177_Foto.jpg'),
      createData('document-photo', '10299_Cédula.png'),
      createData('selfie-photo', "10299_Foto.jpg"),
      
  ];
  
  function CustomizedTables(props) {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Tipo de Documento</StyledTableCell>
              <StyledTableCell align="right">Nombre del Archivo</StyledTableCell>
              </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.typeDocument}>
                <StyledTableCell component="th" scope="row">
                  {row.typeDocument}
                </StyledTableCell>
                <StyledTableCell align="right">{row.fileName}</StyledTableCell>
               </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  
  export default CustomizedTables;