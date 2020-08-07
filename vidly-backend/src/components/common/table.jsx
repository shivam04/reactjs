import React from "react";
import TableHeader from "./tableHeder";
import TableBody from "./tableBody";

const Tabble = ({ columns, sortColumn, data, onSort }) => {
  return (
    <table className="table">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Tabble;
