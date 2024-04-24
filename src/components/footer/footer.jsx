import React from "react";
import {
  Box,
  styled,
  Stack,
  Typography,
  Container,
  Divider,
} from "@mui/material";
import { colors } from "../../styles/globals";

const StyledFooterBox = styled(Box)({
  width: "100%",
  margin: "0 1rem",
  "@media screen and (min-width: 600px)": {
    width: "18%",
  },
});

const StyledLinkBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  justifyContent: "center",
  textTransform: "capitalize",
  fontSize: "0.9rem",
  fontWeight: "300",
  fontFamily: "Jost",
  marginBottom: "1rem",
});

const StyledLink = styled(Box)({
  textDecoration: "none",
  color: colors.FOOTER_TEXT,
  "&:hover": {
    color: colors.ORANGE,
  },
});

const StyledHeading = styled(Typography)({
  color: colors.WHITE,
  fontSize: "0.8rem",
  fontWeight: "700",
  marginBottom: "0.5rem",
  textTransform: "uppercase",
});

const trading = [
  { link: "lorem", url: "" },
  { link: "ipsum", url: "" },
];
const investing = [
  { link: "lorem", url: "" },
  { link: "lorem ", url: "" },
];
const company = [
  { link: "About us", url: "" },
  { link: "why us", url: "" },
  { link: "contact us", url: "" },
];

const Footer = () => {
  return (
    <>
      <Box bgcolor={colors.FOOTER} p={[2, 10]}>
        <Container maxWidth={"lg"}>
          <Stack direction={["column", "row"]} mb={5}>
            <StyledFooterBox>
              <StyledLink to={"/"}>
                <Typography
                  color={"white"}
                  fontWeight={900}
                  fontSize={"1.5rem"}
                  mt={1}
                  mb={1}
                >
                  Logo
                </Typography>
              </StyledLink>
            </StyledFooterBox>

            <StyledFooterBox>
              <StyledHeading variant="h6">lorem</StyledHeading>
              {trading.map((ele, i) => (
                <StyledLinkBox key={i}>
                  <StyledLink
                    to={ele.url}
                    underline="none"
                    color={colors.FOOTER_TEXT}
                  >
                    {ele.link}
                  </StyledLink>
                </StyledLinkBox>
              ))}
            </StyledFooterBox>
            <StyledFooterBox>
              <StyledHeading variant="h6">ipsum</StyledHeading>
              {investing.map((ele, i) => (
                <StyledLinkBox key={i}>
                  <StyledLink
                    to={ele.url}
                    underline="none"
                    color={colors.FOOTER_TEXT}
                  >
                    {ele.link}
                  </StyledLink>
                </StyledLinkBox>
              ))}
            </StyledFooterBox>
            <StyledFooterBox>
              <StyledHeading variant="h6">lorem</StyledHeading>
              {company.map((ele, i) => (
                <StyledLinkBox key={i}>
                  <StyledLink
                    to={ele.url}
                    underline="none"
                    color={colors.FOOTER_TEXT}
                  >
                    {ele.link}
                  </StyledLink>
                </StyledLinkBox>
              ))}
            </StyledFooterBox>
          </Stack>
          <Divider color={colors.GREY} />
        </Container>
      </Box>
    </>
  );
};

export default Footer;
