import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Box from "common/components/Box";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import Button from "common/components/Button";
import Card from "common/components/Card";
import NextImage from "common/components/NextImage";
import Container from "common/components/UI/Container";

import InfoSectionWrapper from "./info.style";
import ImageOne from "common/assets/image/saasModern/dash-1.png";
import ImageTwo from "common/assets/image/saasModern/dash-2.png";
import { Fade } from "react-awesome-reveal";

const InfoSection = ({
  row,
  col,
  title,
  description,
  button,
  textArea,
  imageArea,
  imageAreaRow,
  imageWrapper,
  imageWrapperOne,
  imageWrapperTwo,
  textAreaRow,
}) => {
  return (
    <InfoSectionWrapper>
      <Container fullWidth noGutter className="info-sec-container">
        <Box {...row} {...imageAreaRow}>
          <Box {...col} {...imageArea} className="image_area">
            <Card {...imageWrapper} {...imageWrapperOne}>
              <Fade direction="left" triggerOnce>
                <NextImage src={ImageOne} alt="Info Image One" />
              </Fade>
            </Card>
            <Card {...imageWrapper} {...imageWrapperTwo}>
              <Fade direction="down" triggerOnce>
                <NextImage src={ImageTwo} alt="Info Image Two" />
              </Fade>
            </Card>
          </Box>
        </Box>
      </Container>
      <Container>
        <Box {...row} {...textAreaRow}>
          <Box {...col} {...textArea}>
            <Heading
              {...title}
              content="Fuel Your Growth with High-Performance Data Analytics"
            />
            <Text
              {...description}
              content="At NeuralZeal Data Analytics, we harness the power of cutting-edge data processing technologies and scalable architectures to accelerate your journey towards data-driven insights and growth. Our optimized data pipelines and high-performance infrastructure ensure efficient data ingestion, transformation, and analysis, empowering you to make informed decisions and unlock new opportunities for your business."
            />
            <Box>
              <Link href="#">
                <Button {...button} title="HOW IT WORKS" />
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </InfoSectionWrapper>
  );
};

InfoSection.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  textArea: PropTypes.object,
  imageArea: PropTypes.object,
  imageAreaRow: PropTypes.object,
  imageWrapper: PropTypes.object,
  imageWrapperOne: PropTypes.object,
  imageWrapperTwo: PropTypes.object,
  textAreaRow: PropTypes.object,
};

InfoSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-15px",
    mr: "-15px",
  },
  textAreaRow: {
    flexDirection: "row-reverse",
  },
  col: {
    pr: "15px",
    pl: "15px",
  },
  textArea: {
    width: ["100%", "100%", "50%", "50%", "42%"],
  },
  imageArea: {
    width: ["100%", "100%", "50%", "50%", "55%"],
    flexBox: true,
  },
  imageWrapper: {
    boxShadow: "none",
  },
  imageWrapperOne: {
    mr: ["-250px", "-250px", "-200px", "-250px", "-400px"],
  },
  imageWrapperTwo: {
    alignSelf: "flex-end",
    mb: "-60px",
  },
  title: {
    fontSize: ["26px", "32px", "36px", "40px", "48px"],
    fontWeight: "400",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    mb: "20px",
    lineHeight: "1.25",
  },
  description: {
    fontSize: ["15px", "15px", "15px", "16px", "16px"],
    color: "#343d48cc",
    lineHeight: "2",
    mb: "33px",
  },
  button: {
    type: "button",
    fontSize: "14px",
    fontWeight: "600",
    borderRadius: "4px",
    pl: "22px",
    pr: "22px",
    colors: "secondaryWithBg",
  },
};

export default InfoSection;
