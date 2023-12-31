import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./form"

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");	// switches to mobile if screen width < 1000 pixels

  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          Sociopedia
        </Typography>
      </Box>

			{/* Form Box */}
      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"	// use ;'rem' to allow consistency across browsers (as opposed to using 'px', which can vary)
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to Socipedia, the Social Media site for Sociopaths!
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;