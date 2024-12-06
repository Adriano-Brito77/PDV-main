import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Auth/Login";
import Register from "./components/pages/Auth/Register";

//context
import { UserProvider } from "./context/UserContext";

import Sale from "./components/pages/Sale";

import Navbar from "./components/layout/Navbar";
import Message from "./components/layout/Message";
import Itens from "./components/pages/Itens";
import Modal from "./components/form/Modal";
import Salelist from "./components/pages/Salelist";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <Navbar />
          <Message />

          <div className="container">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/sale" element={<Sale />} />
              <Route path="/salelist" element={<Salelist />} />
              <Route path="/itens" element={<Itens />} />
              <Route path="/itens/register" element={<Modal />} />
            </Routes>
          </div>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
