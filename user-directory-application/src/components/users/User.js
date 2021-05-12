import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {

    const [user, setUser] = useState({
      name: "",
      email: "",
      country: "",
      dob: "",
      pic: ""
    });

    const { id } = useParams();
    useEffect(() => {
      loadUser();
    }, []);

    const loadUser = async () => {
      const res = await axios.get(`http://localhost:8900/users/${id}`);
      setUser(res.data);
    };

    return (
        <div className="container py-4">
            <Link className="btn btn-primary" to="/">
              back to Home
            </Link>
            <h1 className="display-4" style={{marginLeft: '35%'}}>User Id: {id}</h1>
            <hr />
            <ul className="list-group w-50" style={{marginLeft: '25%'}}>
                  <li className="list-group-item">name: {user.name}</li>
                  <li className="list-group-item"> email: {user.email}</li>
                  <li className="list-group-item">country: {user.email}</li>
                  <li className="list-group-item">dob: {user.dob}</li>
                  <li className="list-group-item">
                  <img src={user.pic} alt="user" height="450px" widht="550px"/></li>
            </ul>
        </div>
    );
};

export default User;