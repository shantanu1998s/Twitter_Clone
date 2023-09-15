import "./App.css";
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Outlets from "./components/Outlets";
import Message from "./components/Message";
import Explore from "./components/Explore";
import Notifications from "./components/Notifications";
import Bookmarks from "./components/Bookmarks";
import Lists from "./components/Lists";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/main" element={<Outlets />} />
          <Route path="/explore" element={<Explore/>} />
          <Route path="/notifications" element={<Notifications/>} />
          <Route path="/bookmarks" element={<Bookmarks/>} />
          <Route path="/message" element={<Message/>} />
          <Route path="/lists" element={<Lists/>} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
