import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Box, styled } from "@mui/material";
import { Header, PlaceForm, Slider } from "../../components/homepage";

const StyledBox = styled(Box)({
  background: `url(https://images.pexels.com/photos/380330/pexels-photo-380330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
  //backgroundColor: "white",
  backgroundSize: "cover",
  backgroundPosition: "Top Center",
  backgroundRepeat: "no-repeat",
  "@media screen and (max-width: 1200px)": {
    backgroundSize: "cover",
    backgroundPosition: "Bottom Right",
  },
});

const HomePage = () => {
  const [places, setPlaces] = useState([]);
  const [isPlaces, setIsPlaces] = useState(false);

  const GetPlaces = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/get-places`);
      const { places } = response.data;
      setPlaces(places);
      setIsPlaces(true);
    } catch (error) {
      setIsPlaces(false);
      console.error("Error fetching places:", error);
    }
  };

  useEffect(() => {
    GetPlaces();
    return () => {
      axios.CancelToken.source().cancel();
    };
  }, []);

  return (
    <>
      <StyledBox minHeight={["60vh", "75vh"]}>
        <Container maxWidth={"xl"}>
          <Header />
        </Container>
      </StyledBox>
      <Slider title="beautiful places" data={places} isPlaces={isPlaces} />

      <Container maxWidth={"sm"}>
        <PlaceForm />
      </Container>
    </>
  );
};

export default HomePage;
