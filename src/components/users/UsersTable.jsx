import React from "react";
import { Table, Row } from "react-bootstrap";
import "./users.css";

function UsersTable(props) {
  console.log("UsersTable Props =>", props);

  const mapUsers = (user) => {
    return (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>
          <Row>
            <div>
              {user.address.street} {user.address.suite}
            </div>
          </Row>
          <Row>
            <div>
              {user.address.city} {user.address.zipcode}
            </div>
          </Row>
          <Row>
            <div>
              {user.address.geo.lat} {user.address.geo.lng}
            </div>
          </Row>
        </td>
        <td>{user.phone}</td>
        <td>{user.website}</td>
        <td>
          <Row>
            <div>{user.company.name}</div>
          </Row>
          <Row>
            <div>{user.company.catchPhrase}</div>
          </Row>
          <Row>
            <div>{user.company.bs}</div>
          </Row>
        </td>
      </tr>
    );
  };

  return (
    <>
      <div style={{ maxHeight: "300px", overflowY: "auto" }}>
        <Table striped bordered height="200" variant="dark" className="fixed-header">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Website</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>{props.userList.map(mapUsers)}</tbody>
        </Table>
      </div>
    </>
  );
}

export default UsersTable;
