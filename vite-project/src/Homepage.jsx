import React, { useState } from "react"

import { Box, Stack, Typography } from "@mui/material"
import { NavLink, useNavigate } from 'react-router-dom'
// import bgVideo from "./assets/videoBg.mp4"
import logoBlank from "./assets/LogoBlank.png"
// import backgroundImage from "./assets/bg.png" 
// import backgroundImage from "./assets/004.webp"
import backgroundImage from "./assets/bg3.jpg"

import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import Countdown from "./Countdown";

export const Homepage = () => {

    const [message, setMessage] = useState("");
    const formUrl = import.meta.env.VITE_GOOGLE_FORM_URL

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
    
        fetch(formUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({ email }),
        })
        .then(() => {
            setMessage("Thanks for Subscribing!")
            e.target.reset()
        })
        .catch(() => {
            setMessage("Submission failed, please try again")
        });
    }

    return(
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                height: '100vh',
                overflow: 'hidden',
            }}
            >
            <Box
                sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    zIndex: -1,
                }}
                />
            {/* <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    minWidth: '100%',
                    minHeight: '100%',
                    objectFit: 'cover',
                    zIndex: -2, // behind overlay and content
                }}
                >
                <source src={bgVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video> */}

            {/* Overlay to darken background */}
            <Box
                sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                bgcolor: 'rgba(0, 0, 0, 0.4)',
                zIndex: -1,
                }}
            />

            {/* Fixed Navbar */}
            <Stack
                direction='row'
                sx={{
                position: 'fixed',
                top: 0,
                width: '100%',
                padding: '20px 11px',
                alignItems: 'center',
                justifyContent: 'space-between',
                zIndex: 1000,
                backgroundColor: {xs:'rgba(254, 144, 73, 1)', sm:'rgba(254, 144, 73, 0)'}
                }}
            >
                <NavLink to="/">
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img
                    src={logoBlank}
                    alt='Logo'
                    className='logo-navbar'
                    />
                </Box>
                </NavLink>
            </Stack>

            {/* Fixed Right Sidebar */}
            <Box
                sx={{
                    position: 'fixed',
                    top: { xs: 0, sm: '50%' },
                    right: 0,
                    height: { xs: 'auto', sm: '100%' },
                    width: {xs:'200px', sm:'50px'},
                    transform: { xs: 'none', sm: 'translateY(-50%)' },
                    display: 'flex',
                    alignItems: { xs: 'start', sm: 'center' },
                    justifyContent: 'center',
                    zIndex: 1100,
                    paddingTop: { xs: '60px', sm: 0 },
                }}
                >
                <Box
                    sx={{
                    display: 'flex',
                    flexDirection: {xs:'row', sm:'column'},
                    gap: 2,
                    }}
                >
                    <NavLink to="/option1" className='navlink'><XIcon /></NavLink>
                    <NavLink to="/option2" className='navlink'><InstagramIcon /></NavLink>
                    <NavLink to="https://www.linkedin.com/company/dimensionsixtechnologiespvtltd/" className='navlink'><LinkedInIcon /></NavLink>
                    <NavLink to="mailto:dimensionsixtechnologies@gmail.com" className='navlink'><MailIcon /></NavLink>
                </Box>
                </Box>



            {/* Scrollable Content */}
            <Box
                sx={{
                width: '100%',
                height: '100vh',
                overflowY: 'auto',
                pt: '80px', // padding-top to account for navbar height
                scrollbarWidth: 'none',
                }}
            >
                {/* Example scrollable content */}
                <Box sx={{ height: '80vh', display: 'flex', alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        // backgroundImage: {backgroundImage},
                        // backgroundPosition: 'center',
                        // backgroundRepeat: 'no-repeat',
                    }}>
                    <Countdown />
                </Box>

                <Box
                    sx={{
                        minHeight: '100vh',
                        px: { xs: 2, sm: 4 }, // horizontal padding
                        py: { xs: 4, sm: 6 },
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        textAlign: 'center',
                    }}
                    >
                    <Typography
                        variant="h2"
                        sx={{
                        mb: 4,
                        }}
                    >
                        About Us
                    </Typography>

                    <Box
                        sx={{
                        width: { xs: '100%', sm: '90%', md: '800px' },
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        color: 'white',
                        }}
                    >
                        <Typography variant="body1" sx={{ mb: 2 }}>
                        We’re building Hook — a portable device that turns any regular cycle into an electric-assist ride in seconds.
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 2 }}>
                        Built for India, our tech makes daily commutes, deliveries, and local travel faster, easier, and more affordable for those who need it most — from gig workers and students to rural women and small business owners.
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 4 }}>
                        At our core, we believe mobility is freedom. And we're here to make that freedom accessible, sustainable, and proudly homegrown.
                        </Typography>
                        <Typography
                        variant="h4"
                        sx={{
                            mb: 4,
                            fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' },
                        }}
                        >
                        Simple tech, big impact, built for Bharat.
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2 }}>
                        Subscribe to be the first to know about our launch
                        </Typography>
                    </Box>

                    <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '500px' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            name="email"
                            required
                            placeholder="Enter your email or Phone Number"
                            style={{
                            padding: '10px',
                            borderRadius: '4px',
                            border: '1px solid #ccc',
                            }}
                        />
                        <button
                            type="submit"
                            className="btn btn-primary"
                            id="signup-submit"
                            style={{ alignSelf: 'center', padding: '8px 16px' }}
                        >
                            Submit
                        </button>
                        </div>
                        {message && (
                        <div style={{ marginTop: '10px', color: 'white' }}>{message}</div>
                        )}
                    </form>
                </Box>

                <Box
                sx={{
                    width: '100%',
                    padding: '20px 0',
                    textAlign: 'center',
                    color: 'white',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    mt: 4,
                    zIndex: 4,
                }}
                >
                    <Typography variant="body2">
                        © {new Date().getFullYear()} Dimension Six Technologies. All rights reserved.
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}