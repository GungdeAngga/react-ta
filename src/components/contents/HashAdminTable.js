import React from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Link } from 'react-router-dom';

const style = {
    MainContent: {
      height: "100%",
      display: "flex",
      backgroundColor: "#484848",
      minHeight: "100vh",
    },
    Content: {
      background: "#2C2D30",
      margin: "auto",
      padding: "50px",
      paddingTop: "30px",
      width: "1000px",
      height: "680px",
    },
    list:{
      fontSize: "30px",
      margin: "42.5%",
    },
    route:{
        marginLeft: "-2px",
      },
}

const columns = [
    { id: 'hash', 
      label: 'From', 
      minWidth: 170,
      align: 'center', 
    },

  ];
  
  function createData(hash) {
    return {hash};
  }
  
  const rows = [
    createData('xyz'),
    createData('xyz'),
    createData('xyz'),
    createData('xyz'),
    createData('xyz'),
    createData('xyz'),
    createData('xyz'),
    createData('xyz'),
    createData('xyz'),
    createData('xyz'),
    createData('xyz'),
    createData('xyz'),
    createData('xyz'),
    createData('xyz'),
    createData('xyz'),
  ];

export default function HashAdminTable() {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

  return (
    <div style={style.MainContent}>
      <div style={style.Content}>

        <br/>
        <span style={style.list}>Hash List</span>
        <Link to="/AdminPage" >
        <span style={style.route}>Back</span><br/>
        </Link>

        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 590, background: '#D9D9D9' }}>
            <Table stickyHeader aria-label="sticky table">
            <TableHead>
                <TableRow>
                {columns.map((column) => (
                    <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                    >
                    {column.label}
                    </TableCell>
                ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                    return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                        {columns.map((column) => {
                        const value = row[column.id];
                        return (
                            <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </TableCell>
                        );
                        })}
                    </TableRow>
                    );
                })}
            </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
        </Paper>

      </div>
    </div>
  )
}

