import React, { useEffect, useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { addTransformedUsers } from "./../../services/tUsersService";

function PostToDb(props) {
  const [payload, setPayload] = useState({
    userId: "joeybee426@gmail.com",
    password: "e07c165059bc4420a20ded5064cfb841",
    outputtype: "Json",
    users: [],
  });

  useEffect(() => {
    setPayload((prevState) => {
      const ns = { ...prevState };

      ns.users = props.tUsers;

      return ns;
    });
  }, [props]);

  const onPostToDbClicked = () => {
    console.log("Post to Db clicked", payload);
    addTransformedUsers(payload).then(onAddTUsersSuccess).catch(onAddTUsersError);
  };

  const onAddTUsersSuccess = (response) => {
    console.log("Added tUsers! :D =>", response);
  };

  const onAddTUsersError = (err) => {
    console.log("Error adding tUsers! :( =>", err);
  };

  return (
    <>
      <Row>
        <Col className="m-2 d-grid">
          <Button variant="secondary" size="lg" onClick={onPostToDbClicked}>
            Post Transformed Users To Db
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default PostToDb;
