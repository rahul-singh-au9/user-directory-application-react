import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import {Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography, Avatar, CardHeader, Grow, Grid} from "@material-ui/core"

// card icon pic
const avatar = "https://alan.app/voice/images/branding_page/icon/color/alan-logo-icon-color.png"

const profile = "https://images.unsplash.com/photo-1586083702768-190ae093d34d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=395&q=80"

const Home = () => {
    const classes = useStyles();

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
                    <option value={user.country}>
                        {user.country}
                    </option>
                )
            })
            }
            </select>

            {/* Dob filter */}
            <select onChange={(e) =>{ setSearchTerm(e.target.value)}}>
            {
            users.map((user) =>{
                return(
                    <option value={user.year}>
                        {user.year}
                    </option>
                )
            })
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
                        return user
                    } else if (user.name.toLowerCase().includes(searchTerm.toLowerCase())){
                        return user
                    } else if (user.year.includes(searchTerm.toLowerCase())){
                        return user
                    }else if (user.country.toLowerCase().includes(searchTerm.toLowerCase())){
                        return user
                    }
                }).map((user) => (
                    <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    key={user.id}
                    >
                        <Card>
                            <CardHeader
                                avatar={
                                <Avatar aria-label="recipe">
                                    <img src={avatar} alt="avatar" height="45px"/>
                                </Avatar>
                                }
                                title={user.name}
                            />
                            <CardMedia
                                className={classes.media}
                                image={user.pic || profile}
                            />
                            <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        <b>NAME---</b>{user.name} <br/>
                                        <b>EMAIL---</b>{user.email} <br/>
                                        <b>DATE OF BIRTH--</b>{user.dob} <br/>
                                        <b>COUNTRY---</b>{user.country} <br/>
                                    </Typography>
                            </CardContent>

                            <CardActions disableSpacing>
                            <CardActionArea>
                                    <Link to={`/users/${user.id}`}>
                                        <Button size="small" color="primary">View</Button>
                                    </Link>

                                    <Link to={`/users/edit/${user.id}`}>
                                        <Button size="small" color="primary" >Update</Button></Link>

                                    <Button size="small" color="primary" onClick={() => deleteUser(user.id)}>Delete</Button>

                            </CardActionArea>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Grow>
    </>
    );
};

export default Home;