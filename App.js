import React from 'react';
import { 
  Container, 
  AppBar, 
  Toolbar, 
  IconButton, 
  Typography, 
  Box, 
  Button, 
  Paper, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  CardActions, 
  BottomNavigation, 
  BottomNavigationAction } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import LayerIcon from '@material-ui/icons/Layers';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import './App.css';

import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import { makeStyles } from '@material-ui/core/styles';
import 'fontsource-roboto';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1,
  },


  mainFeaturePost: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",

  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundOverlay: "rgba(0,0,0,.3)"

  },
  mainFeaturePostContent: {
    position: "relative",
    padding: theme.spacing(9),
    marginTop: theme.spacing(6)
  },
  cardMedia: {
    paddingTop: "56.25%"
  },
  cardContent: {
    flexGrow: 1
  },
  cardGrid:{
    marginTop: theme.spacing(4)
  }

}))
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");
  const handleChange = (event, newValue) => {
    setValue (newValue);
  }
  return (
    <>
      <AppBar color="inherit" position="fixed">
        <Container fixed>
          <Toolbar>
            <IconButton edge="start"
              color="inherit" aria-label="menu" className={classes.menuButton}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>Web Developer Blog</Typography>
            <Box mr={3}>
              <Button color="inherit" variant="outlined">Log In</Button>
            </Box>
            <Button color="secondary" variant="contained">Sign Up</Button>
          </Toolbar>
        </Container>
      </AppBar>

      <main>
        <Paper className={classes.mainFeaturePost}
          style={{ backgroundImage: `url(https://source.unsplash.com/random)` }}>
          <Container fixed>
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturePostContent}>
                  <Typography className={classes.blogTitle}
                    component="h1"
                    variant="h3"
                    color="inherit"
                    gutterBottom>
                    Web Developer Blog
                  </Typography>
                  <Typography className={classes.paragraph}
                    variant="h5"
                    color="inherit"
                    paragraph>
                    Lorem ipsum dolor sit amet, constectur adipiscing elit.
                    Aenean rhoncus. Curabitur eu magna quis magna condimentum.
                  </Typography>
                  <Button variant="contained" color="secondary">Learn More</Button>

                </div>

              </Grid>
            </Grid>

          </Container>
        </Paper>
        <div className={classes.mainContent}>
          <Container maxWidth="md">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>This is main Content</Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
            <div className={classes.mainContent}>
              <Grid container spacing={4} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">Start Now</Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined">Learn More</Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs="12" sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="image title" />
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>Blog post</Typography>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary"></Button>
                    <Button size="small" color="primary"> </Button>
                    <LayerIcon/>
                    <PlayCircleFilledIcon/>
                  </CardActions>

                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer> 
        <Typography variant="h6" align="center" gutterBottom>Footer</Typography>
        <BottomNavigation
        value={value}
        onChange={handleChange}
        className={classes.root}
        >
          <BottomNavigationAction
          label="Recents"
          value="recents"
          icon={<RestoreIcon/>}
          />
            <BottomNavigationAction
          label="Favorites"
          value="favorites"
          icon={<FavoriteIcon/>}
          />
            <BottomNavigationAction
          label="NearBy"
          value="nearby"
          icon={<LocationOnIcon/>}
          />
            <BottomNavigationAction
          label="Folder"
          value="folder"
          icon={<FolderIcon/>}
          />
        </BottomNavigation>
        <Typography align="center" color="textSecondary" component="p" variant="subtitle1">Web Developer Blog React JS MAterial UI site</Typography>
      </footer>
    </>
  );
}

export default App;
