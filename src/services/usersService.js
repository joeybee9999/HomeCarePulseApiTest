import axios from "axios";

const url = "https://jsonplaceholder.typicode.com";

const allUsers = () => {
  const config = {
    method: "GET",
    url: `${url}/users`,
    withCredential: true,
    crossDomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export { allUsers };
