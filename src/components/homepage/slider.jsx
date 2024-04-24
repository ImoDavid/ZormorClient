import React, { useState, useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Container,
  Typography,
  Stack,
  IconButton,
  Card,
  CardMedia,
  CardContent,
  Box,
  CardActions,
  Button,
} from "@mui/material";
import { Link as RRLink } from "react-router-dom";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { colors } from "../../styles/globals";
import { FormLoader } from "../loader";


const handleDelete = async (id) => {
  try {
    const response = await axios.post(
      `http://localhost:8080/api/delete-place/${id}`
    );
    toast.success("place deleted successfully", {
      position: "top-right",
    });
  } catch (error) {
    toast.error("something went wrong", {
      position: "top-right",
    });
  }
};

const cardsData = [1, 2, 3, 4, 5];
const Slider = ({ title, data, isPlaces }) => {
  const scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrollEnd, setScrollEnd] = useState(false);

  const slide = (shift) => {
    scrl.current.scrollBy({
      left: shift,
      behavior: "smooth",
    });

    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <Container
        maxWidth={"xl"}
        sx={{ my: 3, py: 3 }}
        className="item-slider-container"
      >
        <Typography
          variant="h4"
          sx={{ px: 3, mb: 3 }}
          fontSize={["0.9rem", "1.5rem"]}
          fontWeight={700}
          color={colors.NT}
        >
          {title}
        </Typography>
        <div className="item-slider">
          <IconButton
            className={`left-arrow-left ${
              scrollX < 1 ? "is-disabled-hide" : ""
            }`}
            onClick={() => slide(-100)}
          >
            <MdArrowBackIos sx={{ fontSize: "70px" }} />
          </IconButton>
          <div ref={scrl} onScroll={scrollCheck} className="item-container">
            {!isPlaces && (
              <>
                {cardsData.map((item, i) => (
                  <Card
                    key={i}
                    m={2}
                    sx={{
                      width: "18rem",
                      cursor: "pointer",
                      borderRadius: "15px",
                      ":hover": {
                        border: `3px solid ${colors.NT}`,
                      },
                    }}
                  >
                    <CardContent>
                      <Box p={10}>
                        <FormLoader />
                      </Box>
                    </CardContent>
                  </Card>
                ))}
              </>
            )}

            {data?.map((item, index) => (
              <span key={index}>
                <Card
                  m={2}
                  sx={{
                    width: "18rem",
                    cursor: "pointer",
                    borderRadius: "15px",
                    ":hover": {
                      border: `3px solid ${colors.NT}`,
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.image_thumbnail}
                    alt={item.title}
                  />
                  <CardContent>
                    <Stack direction={"column"} alignItems={"flex-start"}>
                      <Typography
                        fontWeight={700}
                        fontSize={"1.2rem"}
                        textTransform={"capitalize"}
                      >
                        {item.name}
                      </Typography>

                      <Typography
                        fontWeight={700}
                        fontSize={"1rem"}
                        textTransform={"capitalize"}
                      >
                        {item.location}
                      </Typography>
                      <Typography
                        fontWeight={400}
                        fontSize={"1rem"}
                        textTransform={"capitalize"}
                      >
                        {item.description}
                      </Typography>
                    </Stack>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      sx={{ color: "red" }}
                      onClick={() => handleDelete(item._id)}
                    >
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </span>
            ))}
          </div>
          <IconButton
            className={`right-arrow-right ${
              !scrollEnd ? "" : "is-disabled-hide"
            }`}
            onClick={() => slide(100)}
          >
            <MdArrowForwardIos sx={{ fontSize: "70px" }} />
          </IconButton>
        </div>
      </Container>
    </>
  );
};

export default Slider;
