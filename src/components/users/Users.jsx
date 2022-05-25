import React, { useEffect, useState } from "react";
import { Button, Row, Container, Col } from "react-bootstrap";
import { allUsers } from "../../services/usersService";
import UsersTable from "./UsersTable";
import TransformUsers from "./TransformUsers";
import { toast } from "react-toastify";

function Users() {
  const [renderUserTable, setRenderUserTable] = useState(false);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    if (userList.length > 0) {
      console.log("Rendering User Table");
      setRenderUserTable(true);
    }
  }, [userList]);

  const onGetAllUsers = () => {
    console.log("Get All Users Clicked");
    allUsers().then(onAllUsersSuccess).catch(onAllUsersError);
  };

  const onAllUsersSuccess = (response) => {
    console.log("Successfully got all users! :D =>", response.data);
    toast.success("Successfully got users!");
    const userList = response.data;
    setUserList(userList);
  };

  const onAllUsersError = (err) => {
    console.log("There was an error! :( =>", err);
    toast.error("Error getting users", "GET Error");
  };

  return (
    <>
      <Container>
        <Row>
          <Col className="m-2 d-grid">
            <Button variant="secondary" size="lg" onClick={onGetAllUsers}>
              Get All Users
            </Button>
          </Col>
        </Row>
        {renderUserTable && <UsersTable key="usersTable" userList={userList} />}
        {renderUserTable && <TransformUsers userList={userList} />}
      </Container>
    </>
  );
}

export default Users;
