import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grow, Grid } from "@material-ui/core"
import Cards from "../card/Card";

const Home = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8900/users");
        setUser(result.data.reverse());
    };

    const deleteUser = async id => {
        await axios.delete(`http://localhost:8900/users/${id}`);
        loadUsers();
    };

    const [searchTerm, setSearchTerm] = useState("")

    return (
        <>
            <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Search..."
            style={{margin: "20px", width:"1000px", display: "inline-block"}}
            onChange={(e) =>{ setSearchTerm(e.target.value)}}
            />

            {/* country filter */}
            <select onChange={(e) =>{ setSearchTerm(e.target.value)}}>
            {
            users.map((user) =>{
                return(
                    <option value={user?.country.toLowerCase()}>
                        {user.country}
                    </option>
                )
            })
            }
            </select>

            {/* Dob filter */}
            <select onChange={(e) =>{ setSearchTerm(e.target.value)}}>
            {
            new Set(users.map((user) =>{
                return(
                    <option value={user.year}>
                        {user.year}
                    </option>
                )
            }))
            }
            </select>
        <Grow in>
            <Grid
            container
            alignitem="stretch"
            spacing={3}
            >
                {users.filter((user) => {
                    if (searchTerm === "") {
                        return user;
                    } else if (
                        Object.values(user)
                        .toString()
                        .includes(searchTerm.toLowerCase())
                    ) {
                        return user;
                    }
                }).map((user) => (
                    <Cards id={user.id} name={user.name} pic={user.pic} email={user.email} dob={user.dob} country={user.country} deleteUser={deleteUser} />
                ))}
            </Grid>
        </Grow>
    </>
    );
};

export default Home;