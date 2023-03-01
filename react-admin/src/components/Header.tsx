import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

interface Props {
  title: string;
  subtitle: string;
}

const Header = ({ subtitle, title }: Props) => {
  const theme = useTheme();
  return (
    <Box>
      <Typography
        variant="h2"
        color={theme.palette.customSecondary[100]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={theme.palette.customSecondary[100]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
