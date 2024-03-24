// material-ui
import { Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function UsersPage() {
  const classes = useStyles();

  return (
    <MainCard title="USERS">
    <Typography variant="body2">
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="user table">
        <TableHead>
          <TableRow>
            <TableCell width={10}>uid</TableCell>
            <TableCell align="right" width={10}>用户名</TableCell>
            <TableCell align="right">昵称</TableCell>
            <TableCell align="right">邮箱</TableCell>
            <TableCell align="right">手机号码</TableCell>
            <TableCell align="right">出生日期</TableCell>
            <TableCell align="right">注册时间</TableCell>
            <TableCell align="right">注册时用的邀请码</TableCell>
            <TableCell align="right">更新时间</TableCell>
            <TableCell align="right">权限</TableCell>
            <TableCell align="right">状态</TableCell>
            <TableCell align="center" width={20}>操作</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Typography>
  </MainCard>
 )
}