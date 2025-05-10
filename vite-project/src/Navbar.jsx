import { useState } from 'react'
import { Box, Typography, Button, Stack, Drawer, List, ListItem, ListItemText } from '@mui/material'
import { NavLink, useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const navigate = useNavigate()

    return(
        // Container
        <Stack
            direction='row'
            bgcolor ='rgba(254, 145, 73, 0)'
            sx={{
                alignItems:'center',
                justifyContent:'space-between',
                padding:'20px 20px',
                top: 0,
                position:'sticky',
                gap: '20px',
                zIndex: 1000, // Ensures navbar stays on top

            }}
        >
            
            {/* Logo */}
            <NavLink to="/">
                <Box sx={{display:'flex', alignItems:'center'}}>
                    <img
                        src='../../images/DimensionSixLogo.jpeg'
                        alt='Logo'
                        className='logo-navbar'
                    />
                </Box>
            </NavLink> 
        </Stack>
    )
}