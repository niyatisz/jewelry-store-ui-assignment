import React from 'react';
import { Box, Button, Card, CardActions, CardMedia, Container, Grid, Typography } from '@mui/material';

const Collection = () => {
  return (
    <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', textAlign: 'center', height:'100vh' }}>
      <Typography variant="h4" sx={{ mt: 3, fontFamily: 'Bastiken', textAlign: 'center' }}>New Collection</Typography>

      <Grid container spacing={2} justifyContent="center" sx={{ mt: 3 }}>
        {/* First Card */}
        <Grid item>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              image="/images/necklaces.png"
              alt="Necklaces"
            />
            <CardActions sx={{ display: 'flex', justifyContent: 'flex-start', backgroundColor: '#B07B54' }}>
              <Button size="small" sx={{ textTransform: 'none', color: 'white' }}>Necklaces</Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Second Card */}
        <Grid item>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              image="/images/golden-earrings.png"
              alt="Golden Earrings"
            />
            <CardActions sx={{ display: 'flex', justifyContent: 'flex-start', backgroundColor: '#B07B54' }}>
              <Button size="small" sx={{ textTransform: 'none', color: 'white' }}>Earrings</Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Third Card */}
        <Grid item>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              image="/images/wedding-rings.png"
              alt="Wedding rings"
            />
            <CardActions sx={{ display: 'flex', justifyContent: 'flex-start', backgroundColor: '#B07B54' }}>
              <Button size="small" sx={{ textTransform: 'none', color: 'white' }}>Wedding Rings</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{
        minHeight: '35vh',
        marginTop: '10vh',
        width: '99vw',
        backgroundColor: '#EAD9CE',
        justifyContent:'center',
        alignItems:'center'
      }}>
        <Typography variant='h5' sx={{marginTop:'5vh'}}>A diamond is a woman`s best friends!</Typography>
        <Typography sx={{marginTop:'5vh'}}>A diamond is a timeless symbol of beauty and friendship, making it the perfect gift for any woman. It is often said that diamonds are a woman's best friend, and for good reason. Not only does a diamond represent unwavering loyalty and devotion, but it is also a symbol of luxury, glamor and class. A diamond tells the world that you are proud of your loved one, and want them to have only the best. As Coco Chanel once said, "A diamond is eternity, it is real and it is unbreakable" .</Typography>
      </Box>

      
      <Grid container spacing={2} justifyContent="center" sx={{ mt: 3 }}>
        {/* First Card */}
        <Grid item>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              image="/images/necklaces.png"
              alt="Necklaces"
            />
            <CardActions sx={{ display: 'flex', justifyContent: 'flex-start', backgroundColor: '#B07B54' }}>
              <Button size="small" sx={{ textTransform: 'none', color: 'white' }}>Necklaces</Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Second Card */}
        <Grid item>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              image="/images/golden-earrings.png"
              alt="Golden Earrings"
            />
            <CardActions sx={{ display: 'flex', justifyContent: 'flex-start', backgroundColor: '#B07B54' }}>
              <Button size="small" sx={{ textTransform: 'none', color: 'white' }}>Earrings</Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Third Card */}
        <Grid item>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              image="/images/wedding-rings.png"
              alt="Wedding rings"
            />
            <CardActions sx={{ display: 'flex', justifyContent: 'flex-start', backgroundColor: '#B07B54' }}>
              <Button size="small" sx={{ textTransform: 'none', color: 'white' }}>Wedding Rings</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

    </Container>
  );
}

export default Collection;


