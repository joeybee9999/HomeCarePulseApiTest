import React, { useState } from "react";
import { Col, Button, Row } from "react-bootstrap";
import TransformTable from "./TransformTable";
import PostToDb from "./PostToDb";

function TransformUsers(props) {
  const [renderTransformTable, setRenderTransformTable] = useState(false);
  const [transformedUserAr, setTransformedUserAr] = useState([]);

  console.log("TransformUsers", props.userList, transformedUserAr);

  const mapUserAr = (user) => {
    console.log("Mapping User", user);
    const tUser = {};

    const nameAr = getFirstLastName(user.name);
    const phoneNumber = getPhoneNumber(user.phone);

    tUser.first_name = nameAr.first_name;
    tUser.last_name = nameAr.last_name;
    tUser.company_name = user.company.name;
    tUser.company_full_address = user.address.street
      .concat(", ", user.address.suite)
      .concat(", ", user.address.city)
      .concat(", ", user.address.zipcode);
    tUser.website = user.website;
    tUser.phone = phoneNumber;

    return tUser;
  };

  const getFirstLastName = (name) => {
    const splitNameAr = name.split(" ");
    const nameObj = {};

    if (splitNameAr.length === 2) {
      nameObj.first_name = splitNameAr[0];
      nameObj.last_name = splitNameAr[1];
    } else if (splitNameAr[0].includes("Mrs.")) {
      nameObj.first_name = splitNameAr[1];
      nameObj.last_name = splitNameAr[2];
    } else {
      nameObj.first_name = splitNameAr[0];
      nameObj.last_name = splitNameAr.slice(1, splitNameAr.length).join(" ");
    }

    return nameObj;
  };

  const getPhoneNumber = (number) => {
    const numAr = number.split(" ");
    const phoneNum = numAr[0].replace(/\W/g, "");

    if (phoneNum.length > 10) {
      return phoneNum.substring(1);
    }

    return phoneNum;
  };

  const onTransformUsers = () => {
    console.log("Transform Users Pressed");
    setRenderTransformTable(true);
    setTransformedUserAr(() => props.userList.map(mapUserAr));
  };

  return (
    <>
      <Row>
        <Col className="m-2 d-grid">
          <Button variant="secondary" size="lg" onClick={onTransformUsers}>
            Transform Users
          </Button>
        </Col>
      </Row>
      {renderTransformTable && transformedUserAr.length > 0 && <TransformTable key="transformTable" tUsers={transformedUserAr} />}
      {renderTransformTable && <PostToDb tUsers={transformedUserAr} />}
    </>
  );
}

export default TransformUsers;
