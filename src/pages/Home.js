import React from 'react';
import { Container, Grid, Box, Typography, Button } from '@mui/material';

const Entry = () => {

    return (
        <Container maxWidth="lg" sx={{
            backgroundColor: '#EAD9CE',
            minHeight: '90vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: '99vw',
            width: '100%',
            margin: 1,
        }}>
            <Grid container alignItems="center">
                <Grid item xs={12} md={6}>
                    <Box sx={{
                        textAlign: 'left',
                        color: '#2e2e2d',
                    }}>
                        <Typography variant="h1" fontFamily={'Bastiken'} fontWeight={'100'} gutterBottom>
                            Your One-Stop Destination for Unique and Exquisite Jewelry Pieces
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Here, we offer various types of jewelry, including necklaces, bracelets, earrings, and rings. From classic designs to modern styles, we have something for everyone.
                        </Typography>
                        <Button variant="contained" sx={{
                            backgroundColor: '#B07B54',
                            color: 'white',
                            borderRadius: '0 40% 40% 0',
                            padding: 3,
                        }}>
                            <Typography variant='body2'>Shop The Collection</Typography>
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <img src='/images/home1.png'
                        alt="Jewelry model" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Entry;

