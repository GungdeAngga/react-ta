import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import { baseApi } from "../../util/API/API";
import { useEffect } from "react";

const columns = [
    {
    id: "sender_id",
    label: "Sender_id",
    minWidth: 50,
    align: "center",
  },

  {
    id: "receiver_id",
    label: "Receiver_id",
    minWidth: 50,
    align: "center",
  },

  {
    id: "amount",
    label: "Amount",
    minWidth: 70,
    align: "center",
  },

  {
    id: "time",
    label: "Time",
    minWidth: 100,
    align: "center",
  },
];

function createData( Sender_id, receiver_id, amount, timestamp) {
  return { Sender_id, receiver_id, amount, timestamp };
}

export default function TableHistory() {
  const [data, setData] = useState();
  const IDRConvert = Intl.NumberFormat("id-ID");

  useEffect(() => {
    axios
      .get(baseApi + "blockchain")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const rows = [
    createData(data),
  ];

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
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 590, background: "#D9D9D9" }}>
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
            {data
              ?.sort((a,b)=> {return b.timestamp - a.timestamp})
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, key) => {
                const date = new Date(row.timestamp);
                return (
                  <TableRow key={key} hover role="checkbox" tabIndex={-1}>
                    <TableCell align={"center"}>{row.sender_id}</TableCell>
                    <TableCell align={"center"}>{row.receiver_id}</TableCell>
                    <TableCell align={"center"}>{"Rp" + IDRConvert.format(row.amount)}</TableCell>
                    <TableCell align={"center"}>{date.toUTCString()}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
