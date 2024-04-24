// eslint-disable-next-line no-unused-vars
import React from "react";
import {  Box, Stack, Typography } from "@mui/material";
import { FallingLines } from "react-loader-spinner";
import { colors } from "../../styles/globals";



const Loader = () => {
  return (
    <>
       <Stack
            
            justifyContent={"center"}
            alignItems={"center"}
            height={"100vh"}
          >
        <Box textAlign={"center"}>
          <Typography variant="h3" textAlign={"center"} fontWeight={700} letterSpacing={"1rem"} color={colors.PRIMARY}>GURU</Typography>
          <FallingLines width="50" color={colors.PRIMARY} />
        </Box>
      </Stack>
    </>
  );
};

export default Loader;