import Login from "./Login";
import Users from "./Users";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
