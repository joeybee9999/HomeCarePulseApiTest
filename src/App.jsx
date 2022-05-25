import "./App.css";
import Users from "./components/users/Users";
import { Row } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Row className="App-header">Home Care Pulse API Test</Row>
      <Users />
    </div>
  );
}

export default App;
