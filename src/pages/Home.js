import React from "react";
import { InstagramCard } from "../Components/InstagramCard";
import { Box, Button, Typography, Stack } from "@mui/material";
import "../styles.css";

const Home = () => {
  return (
    <Box>
      <h1 style={{ textAlign: "left", marginLeft: "5%", marginTop: "24px" }}>
        Pure Passion, Pure Muay Thai
      </h1>

      {/* Welcome Section */}
      <div className="section">
        <div className="banner" style={{ backgroundColor: "#2d2d2d" }}>
          <div>
            <Typography
              display="flex"
              fontSize="52px"
              fontWeight="700"
              sx={{
                textAlign: "left",
                alignItems: "center",
                m: "0 15%",
                color: "#FFF",
                lineHeight: "80px",
                height: "100%",
              }}
            >
              WELCOME TO CHANACHON MUAY THAI
            </Typography>
          </div>
          <div
            style={{
              marginLeft: "auto",
              marginRight: "0",
            }}
          >
            <img
              src="https://static.wixstatic.com/media/9ea465_24193c9837c04368822a1ace24ea3864~mv2.jpg/v1/fill/w_613,h_953,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9ea465_24193c9837c04368822a1ace24ea3864~mv2.jpg"
              alt="Welcome Banner"
              width="100%"
            />
          </div>
        </div>
      </div>
      {/* Why Chanachon section */}
      <div className="section" style={{ backgroundColor: "#f8f8f8" }}>
        <div className="banner">
          <div
            style={{
              marginLeft: "0",
              marginRight: "auto",
            }}
          >
            <img
              src="https://static.wixstatic.com/media/9ea465_62f41dca9bbb4607b5e1d9c310e89af1~mv2.jpg/v1/fill/w_613,h_900,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9ea465_62f41dca9bbb4607b5e1d9c310e89af1~mv2.jpg"
              alt="banner2"
              height="100%"
            />
          </div>
          <Stack
            justifyContent="center"
            textAlign="left"
            sx={{
              ml: "40%",
              mr: "5%",
            }}
          >
            <Typography
              fontSize="28px"
              fontWeight="700"
              sx={{
                alignItems: "center",
                mt: "10%",
                color: "#263C91",
                lineHeight: "80px",
              }}
            >
              WHY CHOOSE CHANACHON MUAY THAI?
            </Typography>
            <Typography
              fontSize="18px"
              fontWeight="600"
              sx={{
                alignItems: "left",
                mt: "10%",
                mb: "5%",
                color: "#2D2D2D",
              }}
            >
              We are the authentic Muay Thai Gym. Our mission is to provide
              top-notch training in the art of Muay Thai, focusing on both
              physical and mental well-being. Our experienced instructors are
              dedicated to helping you achieve your fitness and martial arts
              goals.
              <br />
              {/* <Button 
              variant="outlined" 
              href="/About"
              sx={{
                ':hover': {
                  bgcolor: '#263C91',
                  color: '#fff',
                },
                textTransform: "none",
                width: "120px",
                height: "40px",
                fontWeight: "500",
                color: "#263C91"
              }}>
              Check it out
              </Button> */}
            </Typography>
          </Stack>
        </div>
      </div>

      {/* Sign up section */}
      <Stack
        bgcolor="#2d2d2d"
        pt="2%"
        pb="2%"
        direction="column"
        justifyContent="center"
        alignItems="center"
        gap="4"
      >
        <Typography fontSize="28px" fontWeight="600" color="#fff" mb="24px">
          Sign up Today for a Free Trial Class
        </Typography>
        <Button
          variant="contained"
          color="error"
          href="https://chanachonmuaythai.sites.zenplanner.com/freeTrial.cfm"
          sx={{
            textTransform: "none",
            width: "140px",
            height: "40px",
            fontWeight: "600",
          }}
        >
          Sign Up Now!
        </Button>
      </Stack>

      {/* Instagram section */}
      <Typography
        sx={{
          m: "48px 0",
          color: "#263C91",
          fontSize: "36px",
          fontWeight: "600",
        }}
      >
        UPDATE
      </Typography>
      <InstagramCard />
    </Box>
  );
};

export default Home;
