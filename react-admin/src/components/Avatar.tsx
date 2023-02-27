import React from "react";
import { Box } from "@mui/material";

interface Props {
    profileImage:string
}

const Avatar = ({profileImage}:Props) => {
  return (
    <Box
      src={profileImage}
      component="img"
      alt="profile"
      height="40px"
      width="40px"
      borderRadius="50%"
      sx={{ objectFit: "cover" }}
    />
  );
};

export default Avatar;
