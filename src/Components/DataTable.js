import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function DataTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((resp) => setUsers(resp));
  }, []);
  const columns = [
    { field: "id", headerName: "ID", width: 70, sortable: false },
    {
      field: "name",
      headerName: "NAME",
      sortable: false,
      width: 160,
    },
    { field: "email", headerName: "EMAIL", width: 260, sortable: false },
    { field: "website", headerName: "WEBSITE", width: 130, sortable: false },
    {
      field: "phone",
      headerName: "CONTACT",
      sortable: false,
      type: "number",
      width: 200,
    },
  ];
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
