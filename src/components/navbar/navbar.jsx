// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineCaretDown, AiOutlineClose } from "react-icons/ai";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { Box, Stack, styled, Typography, Button } from "@mui/material";
import { colors } from "../../styles/globals";
import { Menu, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { motion } from "framer-motion";

const navLinks = [
  {
    page: "lorem",
    drop: true,
    Links: [
      { link: "ipsum", url: "" },
      { link: "ipsum", url: "" },
    ],
  },
  {
    page: "company",
    url: "#conact",
    drop: true,
    Links: [
      { link: "why us", url: "" },
      { link: "contact us", url: "" },
    ],
  },
];

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const StyledNavLink = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  textTransform: "capitalize",
  fontWeight: "300",
  fontSize: ["1rem", "0.8rem"],
  cursor: "pointer",
  marginRight: "2.8rem",
});

const StyledAB = styled(Box)({
  textDecoration: "none",
  color: colors.WHITE,
  "&:hover": {
    color: colors.PRIMARY,
  },
});
const StyledLink = styled(Box)({
  textDecoration: "none",
  color: colors.BLACK,
  "&:hover": {
    color: colors.PRIMARY,
  },
});
const IconBox = styled(Box)({
  textDecoration: "none",
  "&:hover": {
    textDecoration: "none",
  },

  "&:active": {
    textDecoration: "none",
  },
  "&:visited": {
    textDecoration: "none",
  },
});

const StyledMobileContainer = styled(Box)({
  position: "fixed",
  minHeight: "100vh",
  width: "100%",
  background: "rgba(13, 28, 27)",
  //backgroundColor: colors.FOOTER,
  top: "0",
  right: 0,
  padding: "1rem 0 ",
  // alignItems: "center",
  zIndex: 10000,
  //justifyContent: "end",
});

const MobileLink = styled(Box)({
  textDecoration: "none",
  color: colors.NAV_TEXT,
  marginBottom: "2rem",
  textTransform: "capitalize",
  fontWeight: 500,
  fontSize: "13px",
  display: "flex",
  flexDirection: "column",
  color: "white",
  // alignItems: "center",
  // justifyContent: "center",

  "&:last-child": {
    marginBottom: "2rem",
  },
  "&:hover": {
    color: colors.ORANGE,
  },
});
const Styledflex = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "20px",
  color: "white",
});
const Styledcol = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  marginLeft: "2rem",
  marginTop: "1rem",
  marginBottom: "1rem",
});

const StyledButton = styled(Button)({
  color: colors.WHITE,
  fontSize: "0.8rem",
  "&:hover": {
    color: colors.PRIMARY,
  },
});

const Navbar = () => {
  

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [trading, setTrading] = useState(false);
  const [investing, setInvesting] = useState(false);
  const [company, setCompany] = useState(false);

  return (
    // <ThemeProvider theme={theme}>
    <Box
      sx={{
        background: "rgba(13, 28, 27,0.9)",
        paddingY: ["0.7rem", "2rem"],
        boxShadow: "none",
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        paddingX={["1rem", "0rem"]}
        position={"relative"}
        sx={{
          justifyContent: {
            xs: "space-between",
            sm: "space-between",
            md: "space-between",
            lg: "flex-start",
            xl: "flex-start",
          },
        }}
        width={"100%"}
        maxWidth={["90%", "90%", "90%", "1200px"]}
        marginX={"auto"}
      >
        <Box
          width={["auto", "16.779%"]}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flex={1}
          ml={[0, "20px"]}
        >
          <IconBox>
            <StyledLink to={"/"}>
              <Typography
                color={"white"}
                fontWeight={900}
                fontSize={"1.5rem"}
                mt={1}
              >
                Logo
              </Typography>
            </StyledLink>
          </IconBox>
        </Box>
        <Box>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                lg: "block",
                xl: "block",
              },
            }}
          >
            <Stack direction={"row"}>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <StyledNavLink mt={1}>
                  <StyledButton>
                    <StyledAB to={"/"}>about us</StyledAB>
                  </StyledButton>
                </StyledNavLink>
                {navLinks.map((ele, i) => (
                  <StyledNavLink key={i} mt={1}>
                    <Menu
                      menuButton={
                        <StyledButton>
                          {ele.page}{" "}
                          <Typography variant="span" ml={"0.2rem"}>
                            {ele.drop ? <AiOutlineCaretDown /> : null}
                          </Typography>
                        </StyledButton>
                      }
                      transition
                    >
                      {ele.Links?.map((link, i) => (
                        <StyledLink
                          key={i}
                          to={link.url}
                          underline="none"
                          color={colors.BLACK}
                        >
                          <MenuItem>{link.link}</MenuItem>
                        </StyledLink>
                      ))}
                    </Menu>
                  </StyledNavLink>
                ))}
              </Stack>
              <Stack flexDirection={"row"} mr={3} display={["none", "flex"]}>
                {" "}
                <Box m={1}>
                  <StyledLink to={"/"}>
                    <Button
                      variant="outlined"
                      sx={{
                        width: "5rem",
                        color: colors.WHITE,
                        borderColor: colors.OFF_WHITE,
                        textTransform: "capitalize",
                        "&:hover": {
                          borderColor: colors.OFF_WHITE,
                          backgroundColor: colors.PRIMARY,
                        },
                      }}
                    >
                      Login
                    </Button>
                  </StyledLink>
                </Box>
                <Box m={1}>
                  <StyledLink to={"/"}>
                    <Button
                      variant="contained"
                      sx={{
                        width: "8rem",
                        color: colors.WHITE,
                        backgroundColor: colors.PRIMARY,
                        textTransform: "capitalize",
                        "&:hover": {
                          borderColor: "none",
                          backgroundColor: colors.PRIMARY,
                        },
                      }}
                    >
                      sign up
                    </Button>
                  </StyledLink>
                </Box>
              </Stack>
            </Stack>
          </Box>
          <Box
            display={["block", "none"]}
            fontSize={"1.5rem"}
            onClick={() => {
              setNavbarOpen(!navbarOpen);
            }}
            color={colors.ORANGE}
            sx={{
              display: {
                xs: "block",
                sm: "block",
                md: "block",
                lg: "none",
                xl: "none",
              },
              color: "white",
            }}
          >
            {/* {navbarOpen ? 1 : 0} */}

            <RiMenu3Fill />
          </Box>
        </Box>
      </Stack>

      {navbarOpen && (
        <StyledMobileContainer
          component={motion.nav}
          animate={navbarOpen ? "open" : "closed"}
          variants={variants}
          boxShadow={2}
        >
          <Stack
            direction={"column"}
            // alignItems={"center"}
            minHeight={"100vh"}
            padding={"1rem"}
            backgroundColor={colors.MOBILENAV}
          >
            <Box
              fontSize={"2rem"}
              color={colors.ORANGE}
              mb={1}
              onClick={() => {
                setNavbarOpen(!navbarOpen);
              }}
              sx={{
                display: {
                  xs: "block",
                  sm: "block",
                  md: "block",
                  lg: "none",
                  xl: "none",
                },
                position: "absolute",
                right: "15px",
                color: "white",
              }}
            >
              <AiOutlineClose />
            </Box>
            <Box marginTop={"5rem"}>
              <Box>
                <Styledflex
                  onClick={() => {
                    setTrading(!trading);
                    setMarkets(false);
                    setInvesting(false);
                    setCompany(false);
                  }}
                >
                  <Typography
                    color={colors.ORANGE}
                    fontSize={"1rem"}
                    textTransform={"capitalize"}
                  >
                    ipsum
                  </Typography>

                  <Typography>
                    {trading ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </Typography>
                </Styledflex>
                {trading && (
                  <Styledcol>
                    <MobileLink
                      underline="none"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                      color={colors.NAV_TEXT}
                    >
                      ipsum
                    </MobileLink>
                    <MobileLink
                      underline="none"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                      color={colors.NAV_TEXT}
                    >
                      ipsum
                    </MobileLink>
                  </Styledcol>
                )}
              </Box>
              <Box>
                <Styledflex
                  onClick={() => {
                    setInvesting(!investing);
                    setTrading(false);
                    setMarkets(false);
                    setCompany(false);
                  }}
                >
                  <Typography
                    color={colors.ORANGE}
                    fontSize={"1rem"}
                    textTransform={"capitalize"}
                  >
                    lorem
                  </Typography>

                  <Typography>
                    {investing ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </Typography>
                </Styledflex>
                {investing && (
                  <Styledcol>
                    <MobileLink
                      underline="none"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                      color={colors.NAV_TEXT}
                    >
                      ipsum
                    </MobileLink>
                    <MobileLink
                      underline="none"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                      color={colors.NAV_TEXT}
                    >
                      lorem
                    </MobileLink>
                  </Styledcol>
                )}
              </Box>
              <Box>
                <Styledflex
                  onClick={() => {
                    setCompany(!company);
                    setInvesting(false);
                    setTrading(false);
                    setMarkets(false);
                  }}
                >
                  <Typography
                    color={colors.ORANGE}
                    fontSize={"1rem"}
                    textTransform={"capitalize"}
                  >
                    company
                  </Typography>

                  <Typography>
                    {company ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </Typography>
                </Styledflex>
                {company && (
                  <Styledcol>
                    <MobileLink
                      underline="none"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                      color={colors.NAV_TEXT}
                    >
                      about us
                    </MobileLink>
                    <MobileLink
                      underline="none"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                      color={colors.NAV_TEXT}
                    >
                      why us
                    </MobileLink>
                    <MobileLink
                      underline="none"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                      color={colors.NAV_TEXT}
                    >
                      contact us
                    </MobileLink>
                  </Styledcol>
                )}
              </Box>
              <Box mt={4}>
                <StyledLink to={"/login"}>
                  <Button
                    variant="outlined"
                    sx={{
                      width: "8rem",
                      color: colors.WHITE,
                      borderColor: colors.OFF_WHITE,
                      textTransform: "capitalize",
                      "&:hover": {
                        borderColor: colors.OFF_WHITE,
                        backgroundColor: colors.PRIMARY,
                      },
                    }}
                  >
                    Login
                  </Button>
                </StyledLink>
              </Box>
            </Box>
          </Stack>
        </StyledMobileContainer>
      )}
    </Box>
    //  </ThemeProvider>
  );
};

export default Navbar;
