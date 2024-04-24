import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import { colors } from "../../styles/globals";

const Header = () => {
  return (
    <>
      <Stack
        direction={["column", "row"]}
        alignItems={"center"}
        justifyContent={"center"}
        minHeight={["60vh", "75vh"]}
        py={[2, 0]}
      >
        <Stack
          alignItems={"flex-start"}
          justifyContent={"center"}
          width={["90%", "50%"]}
        >
          <Box p={[1, 3]}>
            <Typography
              fontSize={["2rem", "2.8rem"]}
              color={colors.NT}
              fontWeight={700}
              textTransform={"capitalise"}
              textAlign={"center"}
            >
              The modern way to see beautiful places around and beyond you
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default Header;
