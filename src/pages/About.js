import React from 'react'
import AboutBanner from '../Components/AboutBanner'
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <div>
        <AboutBanner />
        <Box
        color="#263c91"
        >
          <Typography className="aboutHeader"
          sx={{
            fontSize: { lg: '4.4rem', xs: '3.4rem'}
          }}
          color="inherit"
          fontWeight="600"
          >
            Our Story
          </Typography>
          <Typography
          marginLeft="15%"
          fontSize="2rem"
          fontWeight="400"
          width="70%"
          mt="0.8rem"
          p="0 1.2rem"
          color="inherit"
          >
            We started off as a passionate Thai individual deeply in love with Muay Thai. After dedicating four years to training, we took the leap and organized the Muay Thai Fest Toronto in 2023. That’s when Chanachon came to life.
          </Typography>
          <Typography
          sx={{
            fontSize: { lg: '4.4rem', xs: '3.4rem'}
          }}
          color="inherit"
          fontWeight="600"
          >
            Our goal
          </Typography>
          <Typography
          marginLeft="15%"
          fontSize="2rem"
          fontWeight="400"
          width="70%"
          mt="0.8rem"
          p="0 1.2rem"
          color="inherit"
          >
          To nurture Toronto’s Muay Thai community and watch it flourish. We want others to see Muay Thai through our eyes – as something ingrained in our culture and upbringing.
          </Typography>
          <Typography
          sx={{
            fontSize: { lg: '4.4rem', xs: '3.4rem'}
          }}
          color="inherit"
          fontWeight="600"
          >
            What does Chanachon mean?
          </Typography>
          <Typography
          marginLeft="15%"
          fontSize="2rem"
          fontWeight="400"
          width="70%"
          mt="0.8rem"
          p="0 1.2rem"
          color="inherit"
          >
            It’s all about being winners. It embodies the spirit of overcoming obstacles, reminding us all that we’re capable of triumphing over any challenge.
          </Typography>
          <Typography
          sx={{
            fontSize: { lg: '4.4rem', xs: '3.4rem'}
          }}
          color="inherit"
          fontWeight="600"
          >
            Why the betta fish?
          </Typography>
          <Typography
          margin="50px auto 40px 15%"
          fontSize="2rem"
          fontWeight="400"
          width="70%"
          mt="0.8rem"
          p="0 1.2rem"
          color="inherit"
          >
          These beautiful creatures, also known as Siamese fighting fish or “PLA KAT” in Thai, perfectly mirror Muay Thai’s essence. Just like how betta fish fiercely defend their territory, Muay Thai fighters bravely confront any obstacle that comes their way.
          </Typography>
          <Typography
          margin="20px auto 50px 15%"
          fontSize="2rem"
          fontWeight="400"
          width="70%"
          mt="0.8rem"
          p="0 1.2rem"
          color="inherit"
          >
          Every detail in our name and logo reflects our deep-rooted love for Thailand and Muay Thai. We hope that our passion resonates with you and that you’ll come to understand and love Muay Thai just as much as we do.
          </Typography>
          <Typography
          marginLeft="15%"
          fontSize="2rem"
          fontWeight="600"
          width="70%"
          mt="0.8rem"
          p="0 1.2rem"
          color="inherit"
          textAlign="right"
          >
          Khob Khun Krab/Ka <br /> Chanachon team
          </Typography>
        </Box>
    </div>
  )
}

export default About