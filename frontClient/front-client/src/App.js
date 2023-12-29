import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from "./Components/NaviBar";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "./Components/Home";
import About from "./Components/About";
import {AuthContext} from "./Context/AuthContext";
import {useMemo, useState} from "react";


function App() {
    const [token, setToken] = useState(localStorage.getItem("token"));


    // const value=useMemo(()=>({token,setToken}),[token])

    return (
        <>
            <AuthContext.Provider value={token}>
                <Router>
                    <NaviBar/>
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route exact path="/about" element={<About/>}/>
                    </Routes>
                </Router>
            </AuthContext.Provider>
        </>


    );
}

export default App;
