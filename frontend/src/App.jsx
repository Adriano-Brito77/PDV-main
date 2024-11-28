import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./components/pages/Auth/Login";
import Register from "./components/pages/Auth/Register";

//context
import { UserProvider } from "./context/UserContext";

import Sale from "./components/pages/Sale";

import Navbar from "./components/layout/Navbar";
import Message from "./components/layout/Message"



function App() {




  return (
    <div className="App">
      <BrowserRouter>
      
        <UserProvider>
        <Navbar/>
          <Message/>
      
          <div className="container">
            <Routes>
              <Route path="/" element={<Login /> }/>
              <Route path="/register" element={<Register /> } />
              <Route path="/sale" element={<Sale />} />
            </Routes>
          </div>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
