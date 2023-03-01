import React from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white, fontSize: 16,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 15,
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

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      overflow: 'hidden',
      padding: theme.spacing(0, 1.5),
    },
    paper: {
      maxWidth: 800,
      margin: `${theme.spacing(0)}px auto`,
      padding: theme.spacing(1.5),
    },
  }));
  
  function CustomizedTables({metaData}) {
      console.log(metaData) 
        const classes = useStyles();
      return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                          <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 400 }} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                <StyledTableCell  align="center">Cédula</StyledTableCell>
                                <StyledTableCell align="center">Foto</StyledTableCell>
                                <StyledTableCell align="center" sx={{ minWidth: 500 }} >Estatus</StyledTableCell >
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {metaData !== undefined && metaData.length > 0 ? metaData.map((row) => (
                                <StyledTableRow>
                                    <StyledTableCell align="center" component="th" scope="row">
                                    {row[0].data.filename}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{row[1].data.filename}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{row[2].message}
                                    </StyledTableCell>
                                </StyledTableRow>
                                )): <StyledTableRow>
                                <StyledTableCell align="center" component="th" scope="row">
                                </StyledTableCell>
                                <StyledTableCell align="center"></StyledTableCell>
                            </StyledTableRow>
                            }
                            </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Paper>
        </div>    
                        );
                    }
                    
  export default CustomizedTables;