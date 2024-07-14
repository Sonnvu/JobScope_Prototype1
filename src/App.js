import './App.css';
import Header from "./components/header/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home";
import Explore from "./components/pages/Explore";

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/explore/:keyword" element={<Explore />} />
            </Routes>
        </div>
    );
}

export default App;
