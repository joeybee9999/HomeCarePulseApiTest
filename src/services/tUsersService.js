import axios from "axios";

const url = "https://dev.app.homecarepulse.com/Primary/?FlowId=7423bd80-cddb-11ea-9160-326dddd3e106&Action=api";

function addTransformedUsers(payload) {
  const config = {
    method: "POST",
    url: `${url}`,
    data: payload,
    withCredentials: false,
    crossDomain: true,
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  };

  return axios(config);
}

export { addTransformedUsers };
