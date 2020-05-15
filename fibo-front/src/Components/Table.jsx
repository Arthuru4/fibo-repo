import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  }
});

const copyToClipboard = e => {
  const str = e.target.value;
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

export default function DenseTable(props) {
  const classes = useStyles();
const data = props.data || []
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left">IP adress</TableCell>
            <TableCell align="left">Date of request</TableCell>
            <TableCell align="left">Inputed value</TableCell>
            <TableCell align="left">Fibo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.date}>
              <TableCell component="th" scope="row">{row.address}</TableCell>
              <TableCell component="th" scope="row">{row.date}</TableCell>
              <TableCell align="left"><Tooltip title="Click to copy" placement="top"><input readOnly={true} onClick={copyToClipboard} value={row.input} type="text"/></Tooltip></TableCell>
              <TableCell align="left"><Tooltip title="Click to copy" placement="top"><input readOnly={true} onClick={copyToClipboard} value={row.fibo} type="text"/></Tooltip></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}