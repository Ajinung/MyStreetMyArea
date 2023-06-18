import './App.css'
import {Route, Routes} from "react-router-dom";
import Login from "./components/LoginPage";
import Register from "./components/Register";

function App() {

  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App
