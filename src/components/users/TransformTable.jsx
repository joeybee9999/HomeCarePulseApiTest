import React from "react";
import { Table } from "react-bootstrap";

function TransformTable(props) {
  console.log("TransformTable", props);
  const mapTUsers = (tUser) => {
    return (
      <tr key={tUser.first_name}>
        <td>{tUser.first_name}</td>
        <td>{tUser.last_name}</td>
        <td>{tUser.company_name}</td>
        <td>{tUser.company_full_address}</td>
        <td>{tUser.website}</td>
        <td>{tUser.phone}</td>
      </tr>
    );
  };
  return (
    <>
      <div style={{ maxHeight: "300px", overflowY: "auto" }}>
        <Table striped bordered height="200" variant="dark" className="fixed-header">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Company Name</th>
              <th>Company Address</th>
              <th>Website</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>{props.tUsers.map(mapTUsers)}</tbody>
        </Table>
      </div>
    </>
  );
}

export default TransformTable;
