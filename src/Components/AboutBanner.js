import React from 'react';
import { Box, Typography } from '@mui/material';

const AboutBanner = () => {
  return (
    <Box sx={{
        p: { lg: '7rem 1rem 7rem 8.33%', xs: '5.5rem 1rem 0 1rem'},
        width: { lg: '50%', md: '100%'}
    }}
    m="0"
    position="relative"
    textAlign="left"
    >
        <Typography
        sx={{
            fontSize: { lg: '6rem', xs: '4.4rem'}
        }}
        color="#263c91"
        fontWeight="600"
        >
        Pure Passion, Pure Muay Thai
        </Typography>
        <Typography
        sx={{
            display: { md: 'inline', xs: 'none'}
        }}
        mt="0.8rem"
        p="0 1.2rem"
        color="#484a52"
        fontWeight="400"
        fontSize="1.6rem"
        lineHeight="1.5"
        width="100%"
        textAlign="right"
        >
            Pongsakorn T. CEO & Founder of Chanachon Muay Thai
        </Typography>
    </Box>
  )
}

export default AboutBanner