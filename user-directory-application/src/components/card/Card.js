import React from 'react'
import { Link } from "react-router-dom";
import useStyles from "../pages/styles";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Avatar,
  CardHeader,
  Grow,
  Grid,
} from "@material-ui/core";

// card icon pic
const avatar =
  "https://alan.app/voice/images/branding_page/icon/color/alan-logo-icon-color.png";

const cardImg =
  "https://images.unsplash.com/photo-1586083702768-190ae093d34d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=395&q=80";

const Cards = ({id, name, pic, email, dob, country, deleteUser}) => {
  const classes = useStyles();

  return (
      <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      key={id}
      >
          <Card>
              <CardHeader
                  avatar={
                  <Avatar aria-label="recipe">
                      <img src={avatar} alt="avatar" height="45px"/>
                  </Avatar>
                  }
                  title={name}
              />
              <CardMedia
                  className={classes.media}
                  image={pic || cardImg}
              />
              <CardContent>
                      <Typography variant="body2" color="textSecondary" component="p">
                          <b>NAME---</b>{name} <br/>
                          <b>EMAIL---</b>{email} <br/>
                          <b>DATE OF BIRTH--</b>{dob} <br/>
                          <b>COUNTRY---</b>{country} <br/>
                      </Typography>
              </CardContent>

              <CardActions disableSpacing>
              <CardActionArea>
                      <Link to={`/users/${id}`}>
                          <Button size="small" color="primary">View</Button>
                      </Link>

                      <Link to={`/users/edit/${id}`}>
                          <Button size="small" color="primary" >Update</Button></Link>

                      <Button size="small" color="primary" onClick={() => deleteUser(id)}>Delete</Button>

              </CardActionArea>
              </CardActions>
          </Card>
      </Grid>
  )
}

export default Cards
