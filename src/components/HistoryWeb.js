import React from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

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
      padding: "30px",
      paddingTop: "50px",
      width: "540px",
      height: "680px",
    },
    list:{
        fontSize: "30px",
        margin: "42.5%",
      },
}

const columns = [
    { id: 'activity', 
      label: 'Activity', 
      minWidth: 100,
      align: 'center', 
    },

    {
      id: 'amount',
      label: 'Amount',
      minWidth: 100,
      align: 'center',
    },

    {
      id: 'time',
      label: 'Time',
      minWidth: 100,
      align: 'center',
    },
  ];
  
  function createData(activity, amount, time) {
    return { activity, amount, time };
  }
  
  const rows = [
    createData('AtoZ', '+Rp 1000000', '18.00'), //kalau tf ke orang status uangnya ada tanda minus
    createData('Alegre', '-Rp 2000000', '19.00'), //kalai di tf sama orang status uangnya ada tanda plus
    createData('Angga', '+Rp 3000000', '20.00'),
    createData('Ballistic', '-Rp 4000000', '08.00'),
    createData('Blister', '+Rp 5000000', '09.00'),
    createData('Bowie', '-Rp 6000000', '01.00'),
    createData('Cabbie', '+Rp 7000000', '02.00'),
    createData('Irlon', '-Rp 8000000', '03.00'),
    createData('Mexas', '+Rp 9000000', '04.00'),
    createData('Jars', '-Rp 10000000', '05.00'),
    createData('France', '+Rp 20000000','06.00'),
    createData('Desmon', '-Rp 30000000','07.00'),
    createData('Ivan', '+Rp 40000000', '08.00'),
    createData('Flack', '-Rp 50000000', '09.00'),
    createData('Jakku', '+Rp 60000000', '13.00'),
  ];

export default function HistoryWeb() {

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

        <span style={style.list}>History</span>

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
