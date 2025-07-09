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
      marginLeft: "-75px",
    },
}

const columns = [
    { id: 'from', 
      label: 'From', 
      minWidth: 170,
      align: 'center', 
    },

    { id: 'to', 
      label: 'To', 
      minWidth: 170,
      align: 'center', 
    },

    {
      id: 'amount',
      label: 'Amount',
      minWidth: 170,
      align: 'center',
    },

    {
      id: 'time',
      label: 'Time',
      minWidth: 170,
      align: 'center',
    },
  ];
  
  function createData(from, to, amount, time) {
    return { from, to, amount, time };
  }
  
  const rows = [
    createData('AtoZ', 'Mercia', 'Rp 1000000', '18.00'),
    createData('Alegre', 'Shadov', 'Rp 2000000', '19.00'),
    createData('Angga', 'Aditya', 'Rp 3000000', '20.00'),
    createData('Ballistic', 'Bender', 'Rp 4000000', '08.00'),
    createData('Blister', 'Cris', 'Rp 5000000', '09.00'),
    createData('Bowie', 'Anzi', 'Rp 6000000', '01.00'),
    createData('Cabbie', 'Deuz', 'Rp 7000000', '02.00'),
    createData('Irlon', 'Evan', 'Rp 8000000', '03.00'),
    createData('Mexas', 'Mux', 'Rp 9000000', '04.00'),
    createData('Jars', 'John', 'Rp 10000000', '05.00'),
    createData('France', 'freed', 'Rp 20000000','06.00'),
    createData('Desmon', 'Daemon', 'Rp 30000000','07.00'),
    createData('Ivan', 'Fritz', 'Rp 40000000', '08.00'),
    createData('Flack', 'Ning', 'Rp 50000000', '09.00'),
    createData('Jakku', 'Luna', 'Rp 60000000', '13.00'),
  ];

export default function AdminContent() {

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
        <span style={style.list}>List Activity</span>
        <Link to="/AdminHashPage" >
        <span style={style.route}>Hash table</span><br/>
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
