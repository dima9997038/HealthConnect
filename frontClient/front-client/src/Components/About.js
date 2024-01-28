import React, {useContext} from 'react';
import {AuthContext} from "../Context/AuthContext";
import {Button} from "react-bootstrap";
function About(props) {
    const token=useContext(AuthContext);


    return (
        <div>
            <h2>About Us</h2>
        </div>
    );
}

export default About;