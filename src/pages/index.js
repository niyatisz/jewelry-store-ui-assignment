import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Divider from '@mui/material/Divider';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import FacebookIcon from '@mui/icons-material/Facebook';
import * as React from 'react';
import { Card, CardMedia, FormControl, Grid, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

const pages = ["Home", "About Us", "Collection", "Contact Us"];

export default function Home() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Head>
        <title>Jewelry Store</title>
      </Head>
      <main className={`${styles.main} ${inter.className}`}>

        {/*Navbar Section */}
        <AppBar position="static" sx={{ backgroundColor: '#EAD9CE', color: 'black' }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-start' }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'black', display: 'block' }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>

              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  fontFamily: 'Bastiken',
                  fontSize: '20px',
                  color: 'inherit',
                  letterSpacing: '.3rem',
                  textDecoration: 'none',
                }}
              >
                JEWELS
              </Typography>

              <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
                <IconButton sx={{ color: 'black' }}>
                  <SearchIcon />
                </IconButton>
                <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
                <IconButton sx={{ color: 'black' }}>
                  <ShoppingCartIcon />
                </IconButton>
                <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
                <IconButton sx={{ color: 'black' }}>
                  <PersonOutlineIcon />
                </IconButton>

                <Typography variant='body2' sx={{ mx: 1 }}>Sign Up</Typography>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        {/*Home Section */}
        <Container maxWidth="xl" sx={{
          backgroundColor: '#EAD9CE',
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '20px 0',
          width: '100vw',
          minWidth: '100vw'
        }}>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} md={6}>
              <Box sx={{
                textAlign: 'left',
                color: '#2e2e2d',
                padding: '20px',
              }}>
                <Typography variant="h2" fontFamily={'Bastiken'} fontWeight={'100'} gutterBottom>
                  Your One-Stop Destination for Unique and Exquisite Jewelry Pieces
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Here, we offer various types of jewelry, including necklaces, bracelets, earrings, and rings. From classic designs to modern styles, we have something for everyone.
                </Typography>
                <Button variant="contained" sx={{
                  backgroundColor: '#B07B54',
                  color: 'white',
                  borderRadius: '0 30px 30px 0',
                  padding: 2,
                  mt: 2,
                  width: '30%',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)'
                }}>
                  <Typography variant='body2'>Shop The Collection</Typography>
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: 'center' }}>
                <img src='/images/home1.png' alt="Jewelry model" style={{ maxWidth: '100%', height: 'auto' }} />
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/*Collection and Best sellers Section */}
        <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', textAlign: 'center', minHeight: '100vh', minWidth: '100vw', width: '100vw' }}>
          <Typography variant="h4" sx={{ mt: 3, fontFamily: 'Bastiken', textAlign: 'center' }}>New Collection</Typography>

          <Grid container justifyContent="center" sx={{ mt: 3 }}>
            {/* First Card */}
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ maxWidth: 345, position: 'relative' }}>
                <CardMedia
                  component="img"
                  image="/images/necklaces.png"
                  alt="Necklaces"
                  sx={{ position: 'relative' }}
                />
                <Button
                  size="small"
                  sx={{
                    position: 'absolute',
                    bottom: 16,
                    left: 0,
                    textTransform: 'none',
                    color: 'white',
                    backgroundColor: '#B07B54',
                    borderRadius: '0 30px 30px 0',
                    padding: 1,
                    width: '80%',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.4)',
                    '&:hover': {
                      backgroundColor: '#B07B54',
                    },
                  }}
                >
                  Necklaces
                </Button>
              </Card>
            </Grid>


            {/* Second Card */}
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ maxWidth: 345, position: 'relative' }}>
                <CardMedia
                  component="img"
                  image="/images/golden-earrings.png"
                  alt="Golden Earrings"
                  sx={{ position: 'relative' }}
                />

                <Button size="small" sx={{
                  position: 'absolute',
                  bottom: 16,
                  left: 0,
                  textTransform: 'none',
                  color: 'white',
                  backgroundColor: '#B07B54',
                  borderRadius: '0 30px 30px 0',
                  padding: 1,
                  width: '80%',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.4)',
                  '&:hover': {
                    backgroundColor: '#B07B54',
                  },
                }}>Earrings</Button>
              </Card>
            </Grid>

            {/* Third Card */}
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ maxWidth: 345, position: 'relative' }}>
                <CardMedia
                  component="img"
                  image="/images/wedding-rings.png"
                  alt="Wedding rings"
                  sx={{ position: 'relative' }}
                />

                <Button size="small" sx={{
                  position: 'absolute',
                  bottom: 16,
                  left: 0,
                  textTransform: 'none',
                  color: 'white',
                  backgroundColor: '#B07B54',
                  borderRadius: '0 30px 30px 0',
                  padding: 1,
                  width: '80%',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.4)',
                  '&:hover': {
                    backgroundColor: '#B07B54',
                  },
                }}>Wedding Rings</Button>

              </Card>
            </Grid>
          </Grid>

          <Box sx={{
            minHeight: '35vh',
            marginTop: '10vh',
            // width: '100%',
            backgroundColor: '#EAD9CE',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            // padding: '20px',
          }}>
            <Typography variant='h5' sx={{ mt: '5vh', textAlign: 'center' }}>A diamond is a woman's best friend!</Typography>
            <Typography sx={{ mt: '5vh', textAlign: 'center' }}>A diamond is a timeless symbol of beauty and friendship, making it the perfect gift for any woman. It is often said that diamonds are a woman's best friend, and for good reason. Not only does a diamond represent unwavering loyalty and devotion, but it is also a symbol of luxury, glamor, and class. A diamond tells the world that you are proud of your loved one and want them to have only the best. As Coco Chanel once said, "A diamond is eternity, it is real, and it is unbreakable".</Typography>
          </Box>

          <Typography variant="h4" sx={{ mt: 10, fontFamily: 'Bastiken', textAlign: 'center' }}>Best Sellers</Typography>

          <Grid container spacing={2} justifyContent="center" sx={{ mt: 3 }}>
            {/* First Card */}
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  image="/images/High-Angle-Golden-Earrings.png"
                  alt="Necklaces"
                />
                <Typography sx={{ textAlign: 'left', padding: 1 }}>High Angle Golden Earrings</Typography>
                <Typography sx={{ textAlign: 'left', padding: 1 }}>$60.00 USD </Typography>
              </Card>
            </Grid>

            {/* Second Card */}
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  image="/images/Round-Golden-Earrings.png"
                  alt="Golden Earrings"
                />
                <Typography sx={{ textAlign: 'left', padding: 1 }}>Round Golden Earrings</Typography>
                <Typography sx={{ textAlign: 'left', padding: 1 }}>$47.00 USD </Typography>
              </Card>
            </Grid>

            {/* Third Card */}
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ maxWidth: 345 }}>
              </Card>
            </Grid>
          </Grid>
          <Grid container spacing={2} justifyContent="center" sx={{ mt: 3 }}>
            {/* First Card */}
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ maxWidth: 345 }}>
              </Card>
            </Grid>

            {/* Second Card */}
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  image="/images/Thin-golden-chain.png"
                  alt="Golden Earrings"
                />
                <Typography sx={{ textAlign: 'left', padding: 1 }}>Thin Gold Chain</Typography>
                <Typography sx={{ textAlign: 'left', padding: 1 }}>$35.00 USD </Typography>
              </Card>
            </Grid>

            {/* Third Card */}
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  image="/images/Shiny-Golden-chain.png"
                  alt="Golden Earrings"
                />
                <Typography sx={{ textAlign: 'left', padding: 1 }}>Shiny Gold Chain</Typography>
                <Typography sx={{ textAlign: 'left', padding: 1 }}>$52.00 USD </Typography>
              </Card>
            </Grid>
          </Grid>
          <Grid container spacing={2} justifyContent="center" sx={{ mt: 3 }}>
            {/* First Card */}
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  image="/images/Eastern-golden-bracelet.png"
                  alt="Necklaces"
                />
                <Typography sx={{ textAlign: 'left', padding: 1 }}>Eastern Gold braclet</Typography>
                <Typography sx={{ textAlign: 'left', padding: 1 }}>$58.00 USD </Typography>
              </Card>
            </Grid>

            {/* Second Card */}
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  image="/images/gold-braclet.png"
                  alt="Golden Earrings"
                />
                <Typography sx={{ textAlign: 'left', padding: 1 }}>Gold braclet</Typography>
                <Typography sx={{ textAlign: 'left', padding: 1 }}>$77.00 USD </Typography>
              </Card>
            </Grid>

            {/* Third Card */}
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ maxWidth: 345 }}>
              </Card>
            </Grid>
          </Grid>

        </Container>

        {/*About Us Section */}
        <Container maxWidth="xl" sx={{
          backgroundColor: '#EAD9CE',
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '20px 0',
          width: '100vw',
          minWidth: '100vw'
        }}>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} md={6} margin={'0'} padding={'0'}>
              <img src='/images/about_us.png' alt="Jewelry model" style={{ maxWidth: '100%', height: 'auto', objectFit: 'cover' }} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{
                textAlign: 'left',
                color: '#2e2e2d',
                padding: '20px',
              }}>
                <Typography variant="h3" fontFamily={'Bastiken'} fontWeight={'100'} gutterBottom>
                  About Us
                </Typography>
                <Typography variant="body1" gutterBottom>
                  We're a group of five friends passionate about making unique and beautiful jewelry. Whether it's crafting intricate beaded necklaces or designing elegant bracelets, our creativity and skills shine through in every piece we create. We value collaboration and work together to come up with new ideas and techniques that enrich our craft. From sourcing the highest quality materials to putting the finishing touches on each piece, we take pride in every step of the process. At the heart of our business is a genuine love for jewelry-making, and we can't wait to share our passion with you.
                </Typography>
              </Box>
              <Button variant="contained" sx={{
                backgroundColor: '#B07B54',
                color: 'white',
                borderRadius: '30px 0 0 30px',
                padding: 2,
                marginTop: '30%',
                alignItems: 'flex-end',
                justifyContent: 'center',
                width: '30%',
                display: 'flex',
                marginLeft: 'auto',
                right: 0,
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
              }}>
                <Typography variant='body2'>Read More</Typography>
              </Button>
            </Grid>

          </Grid>
        </Container>

        {/*Signature Grid Section */}
        <Container
          maxWidth="xl"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            minHeight: '100vh',
            minWidth: '60vw',
            width: '100vw',
            position: 'relative',
            mt: 10
          }}
        >
          <Typography variant="h4" sx={{ mt: 3, fontFamily: 'Bastiken', textAlign: 'center' }}>Signature Earrings</Typography>
          <Typography variant="body" sx={{ mt: 3, fontFamily: 'Bastiken', textAlign: 'center' }}>Our unique and eye-catching earrings are exclusively made in-house. Each pair is carefully designed with attention to detail, resulting in a signature style that is both modern and timeless.</Typography>

          <Grid container justifyContent="center" spacing={2} sx={{ mt: 3 }}>
            {/* First Card */}
            <Grid item xs={6} sm={3} md={3} lg={3}>
              <img src="/images/Rectangle 27.png" alt="Necklaces" style={{ width: '100%', height: 'auto' }} />
            </Grid>

            {/* Second Card */}
            <Grid item xs={6} sm={3} md={3} lg={3}>
              <img src="/images/Rectangle 28.png" alt="Necklaces" style={{ width: '100%', height: 'auto' }} />
            </Grid>

            {/* Third Card */}
            <Grid item xs={6} sm={3} md={3} lg={3}>
              <img src="/images/Rectangle 29.png" alt="Necklaces" style={{ width: '100%', height: 'auto' }} />
            </Grid>

            {/* Fourth Card */}
            <Grid item xs={6} sm={3} md={3} lg={3}>
              <img src="/images/Rectangle 30.png" alt="Necklaces" style={{ width: '100%', height: 'auto' }} />
            </Grid>
          </Grid>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              width: '60%',
              position: 'absolute',
              bottom: 10,
              right: 0,
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#B07B54',
                color: 'white',
                borderRadius: '30px 0 0 30px',
                padding: 2,
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
                width: '30%',
                display: 'flex',
              }}
            >
              <Typography variant="body2">View All</Typography>
            </Button>
          </Box>
        </Container>

        {/*Trending Section */}
        <Container maxWidth="xl" sx={{
          backgroundColor: '#EAD9CE',
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '20px 0',
          width: '100vw',
          minWidth: '100vw'
        }}>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} md={6}>
              <Box sx={{
                textAlign: 'left',
                color: '#2e2e2d',
                padding: '20px',
              }}>
                <Typography variant="h3" fontFamily={'Bastiken'} gutterBottom>
                  Most Trending In SS ‘23
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Based on current fashion trends and new emerging styles, it is expected that bold and oversized earrings will continue to be popular. Additionally, sustainable fashion, eco-friendly materials and ethical production methods are becoming more important to consumers, so earrings made from recycled or sustainable materials also gain popularity.
                </Typography>
                <Button variant="contained" sx={{
                  backgroundColor: '#B07B54',
                  color: 'white',
                  borderRadius: '0 30px 30px 0',
                  padding: 2,
                  mt: '30%',
                  width: '30%',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)'
                }}>
                  <Typography variant='body2'>Shop now</Typography>
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: 'center' }}>
                <img src='/images/shop-now.png' alt="Jewelry model" style={{ maxWidth: '100%', height: 'auto' }} />
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/*Follow Instagram Section */}
        <Container
          maxWidth="xl"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            minHeight: '100vh',
            minWidth: '60vw',
            width: '100vw',
            position: 'relative',
            mt: 10
          }}
        >
          <Typography variant="h4" sx={{ mt: 3, fontFamily: 'Bastiken', textAlign: 'center' }}>Follow Us On Instagram</Typography>
          <Typography variant="body" sx={{ mt: 3, fontFamily: 'Bastiken', textAlign: 'center' }}>@SHOPJEWELSBOUTIQUE  #JEWELS</Typography>

          <Grid container justifyContent="center" spacing={3} sx={{ mt: 3 }}>
            {/* First Card */}
            <Grid item xs={6} sm={3} md={3} lg={3}>
              <img src="/images/insta-1.png" alt="Necklaces" style={{ width: '100%', height: 'auto' }} />
            </Grid>

            {/* Second Card */}
            <Grid item xs={6} sm={3} md={3} lg={3}>
              <img src="/images/insta-2.png" alt="Necklaces" style={{ width: '100%', height: 'auto' }} />
            </Grid>

            {/* Third Card */}
            <Grid item xs={6} sm={3} md={3} lg={3}>
              <img src="/images/insta-3.png" alt="Necklaces" style={{ width: '100%', height: 'auto' }} />
            </Grid>

            {/* Fourth Card */}
            <Grid item xs={6} sm={3} md={3} lg={3}>
              <img src="/images/insta-4.png" alt="Necklaces" style={{ width: '100%', height: 'auto' }} />
            </Grid>
          </Grid>
          <Grid container justifyContent="center" spacing={2} sx={{ mt: 3 }}>
            {/* First Card */}
            <Grid item xs={6} sm={3} md={3} lg={3}>
              <img src="/images/insta-5.png" alt="Necklaces" style={{ width: '100%', height: 'auto' }} />
            </Grid>

            {/* Second Card */}
            <Grid item xs={6} sm={3} md={3} lg={3}>
              <img src="/images/insta-6.png" alt="Necklaces" style={{ width: '100%', height: 'auto' }} />
            </Grid>

            {/* Third Card */}
            <Grid item xs={6} sm={3} md={3} lg={3}>
              <img src="/images/insta-7.png" alt="Necklaces" style={{ width: '100%', height: 'auto' }} />
            </Grid>

            {/* Fourth Card */}
            <Grid item xs={6} sm={3} md={3} lg={3}>
              <img src="/images/insta-8.png" alt="Necklaces" style={{ width: '100%', height: 'auto' }} />
            </Grid>
          </Grid>

        </Container>

        {/*Footer Section */}
        <Box sx={{ backgroundColor: '#EAD9CE' }}>
          <Container maxWidth="xl">
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant="h6" sx={{ marginBottom: 2 }}>Join Our Email List</Typography>
                <Typography variant="body2" sx={{ marginBottom: 2 }}>
                  Subscribing to Jewels allows you to stay updated on the latest trends and designs in the jewelry industry.
                </Typography>
                <FormControl sx={{ width: '100%' }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    variant="outlined"
                    placeholder="Email"
                    size="small"
                    sx={{ marginRight: 2, flexGrow: 1, backgroundColor: 'white', borderRadius: '100px', padding: 0.5 }}
                    endAdornment={
                      <InputAdornment position="end">
                        <Button variant="contained" sx={{ backgroundColor: '#B07B54', color: 'white', borderRadius: '20px' }}>
                          Send
                        </Button>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
                <Box sx={{ display: 'flex', marginTop: 5, gap: '10px' }}>
                  <IconButton href="https://instagram.com" target="_blank" sx={{ border: '1px solid #B07B54', color: '#B07B54' }}>
                    <InstagramIcon />
                  </IconButton>
                  <IconButton href="https://pinterest.com" target="_blank" sx={{ border: '1px solid #B07B54', color: '#B07B54' }}>
                    <PinterestIcon />
                  </IconButton>
                  <IconButton href="https://facebook.com" target="_blank" sx={{ border: '1px solid #B07B54', color: '#B07B54' }}>
                    <FacebookIcon />
                  </IconButton>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
                <Typography variant="h6" sx={{ marginBottom: 2 }}>Shop</Typography>
                <Typography variant="body2" sx={{ marginBottom: 1 }}>Collections</Typography>
                <Typography variant="body2" sx={{ marginBottom: 1 }}>Rings</Typography>
                <Typography variant="body2" sx={{ marginBottom: 1 }}>Bracelets</Typography>
                <Typography variant="body2" sx={{ marginBottom: 1 }}>Chains</Typography>
                <Typography variant="body2" sx={{ marginBottom: 1 }}>Wedding Rings</Typography>
              </Grid>

              <Grid item xs={12} sm={6} md={2}>
                <Typography variant="h6" sx={{ marginBottom: 2 }}>About</Typography>
                <Typography variant="body2" sx={{ marginBottom: 1 }}>About Us</Typography>
                <Typography variant="body2" sx={{ marginBottom: 1 }}>Contact</Typography>
                <Typography variant="body2" sx={{ marginBottom: 1 }}>Privacy Policy</Typography>
                <Typography variant="body2" sx={{ marginBottom: 1 }}>FAQ's</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant="h6" sx={{ marginBottom: 2 }}>Our Contacts</Typography>
                <Typography variant="body2" sx={{ marginBottom: 1 }}>shop_jewels@gmail.com</Typography>
                <Typography variant="body2" sx={{ marginBottom: 1 }}>+123456789</Typography>
              </Grid>
            </Grid>
          </Container>
          <Box sx={{ textAlign: 'center', marginTop: '50px' }}>
            <Divider orientation="horizontal" flexItem sx={{ mx: 1 }} />
            <Typography variant="body2" sx={{ textAlign: 'center', marginTop: '20px' }}>2023 ©JEWELS. All Rights Reserved.</Typography>
            <Typography variant="body2">Created by Julianna</Typography>
          </Box>
        </Box>
      </main>
    </>
  );
}

