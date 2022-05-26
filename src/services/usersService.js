import axios from "axios";

const endpoint = "https://jsonplaceholder.typicode.com";

const allUsers = () => {
  const config = {
    method: "GET",
    url: `${endpoint}/users`,
    withCredential: true,
    crossDomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export { allUsers };
