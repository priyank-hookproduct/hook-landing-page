import { Box, Typography, Button, Stack, Grid, TextField } from "@mui/material";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
        <Box>
            <Grid
                container
                spacing={4}
                sx={{
                    margin: "0px",
                    padding: "20px",
                    backgroundColor: "#D9D9D9",
                    maxWidth: "100%",
                }}
                >
                <Grid item xs={12} sm={6} md={4}>
                    <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                    >
                        <img
                            src="../../images/DimensionSixLogoFooter.jpeg"
                            alt="Logo"
                            className="logo-footer"
                            sx={{ marginBottom: "5px" }}
                        />
                        <Typography
                            variant="body1"
                            sx={{
                            color: "black",
                            }}
                        >
                            © 2024 Dimension Six. All rights reserved
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
  );
};
