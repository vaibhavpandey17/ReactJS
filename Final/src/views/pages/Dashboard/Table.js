import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  Mtable: {
    // minWidth: 650,
    "& .MuiTable-root ":{
      borderCollapse: "inherit"
    }
  },
});

function createData(name, imgH, imgP, calories, fat, carbs, protein) {
  return { name, imgH, imgP, calories, fat, carbs, protein };
}

const rows = [
  createData('images/banner_back.png', 'abstract 3D', 'lorem bishnoi kagsdfk akjsd', '32 in stocks', "$ 45.99", 20),
  createData('images/banner_back.png', 'Sarphens Illustion', 'lorem bishnoi kagsdfk akjsd', '32 in stocks', "$ 45.99", 20),
  createData('images/banner_back.png', 'abstract 3D', 'lorem bishnoi kagsdfk akjsd', '32 in stocks', "$ 45.99", 20),
  createData('images/banner_back.png', 'Sarphens Illustion', 'lorem bishnoi kagsdfk akjsd', '32 in stocks', "$ 45.99", 20),
  createData('images/banner_back.png', 'abstract 3D', 'lorem bishnoi kagsdfk akjsd', '32 in stocks', "$ 45.99", 20),

];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.Mtable}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell width={"70%"} style={{color:"gray"}}>Product Name</TableCell>
            <TableCell align="right" style={{color:"gray"}}>Stoke</TableCell>
            <TableCell align="right" style={{color:"gray"}}>Price</TableCell>
            <TableCell align="right" style={{color:"gray"}}>Total Sales</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                <div style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "center" }}>
                  <img src={row.name} style={{ width: "70px", height: "auto" }} />
                  <div align="right" style={{ display: "flex", flexDirection: "column", height: "50px", textAlign: "start", justifyContent: "center", gap: "0px" }}>
                    <h1 style={{ color: "#000", fontSize: "14px", margin: "0px" }}>{row.imgH}</h1>
                    <p style={{ color: "#000", fontSize: "10px", margin: "0px" }}>{row.imgP}</p>
                  </div>
                </div>

              </TableCell>
              <TableCell align="right" style={{color:"#000"}}>{row.calories}</TableCell>
              <TableCell align="right" style={{color:"#000"}}>{row.fat}</TableCell>
              <TableCell align="right" style={{color:"#000"}}>{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
