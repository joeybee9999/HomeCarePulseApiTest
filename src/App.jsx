import "./App.css";
import Users from "./components/users/Users";
import { Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Row className="App-header">Home Care Pulse API Test</Row>
      <Users />
    </div>
  );
}

export default App;
