import React from "react";
import PropTypes from "prop-types";
import Box from "common/components/Box";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import Button from "common/components/Button";
import NextImage from "common/components/NextImage";
import Container from "common/components/UI/Container";

import VendorLogos from "common/assets/image/saasModern/vendor-logos.png";

const TrialSection = ({
  sectionWrapper,
  row,
  title,
  description,
  textArea,
  imageArea,
  ImageOne,
  btnStyle,
  outlineBtnStyle,
  buttonWrapper,
}) => {
  return (
    <Box {...sectionWrapper}>
      <Container>
        <Box {...row}>
          <Box {...imageArea}>
            <NextImage {...ImageOne} src={VendorLogos} alt="VendorLogos" />
          </Box>
          <Box {...textArea}>
            <Heading
              {...title}
              content="Join us now to elevate your data insights!."
            />
            <Text
              {...description}
              content="Take your data insights to the next level by joining us now! Gain access to cutting-edge analytics tools and expertise, empowering you to unlock valuable insights and drive informed decision-making."
            />
            <Box {...buttonWrapper}>
              <Button title="JOIN WITH SLACK" {...btnStyle} />
              <Button
                title="Login with Email"
                variant="textButton"
                {...outlineBtnStyle}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

TrialSection.propTypes = {
  sectionWrapper: PropTypes.object,
  row: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  imageArea: PropTypes.object,
  ImageOne: PropTypes.object,
};

TrialSection.defaultProps = {
  sectionWrapper: {
    as: "section",
    className: "trial-section",
    pt: ["20px", "40px", "60px", "80px"],
    pb: ["0px", "0px", "0px", "80px"],
  },
  row: {
    flexBox: true,
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
  },
  textArea: {
    width: ["100%", "100%", "80%", "43%"],
  },
  imageArea: {
    width: ["100%", "100%", "43%"],
    mb: ["35px", "35px", "40px", "40px"],
    flexBox: true,
    justifyContent: "center",
  },
  title: {
    fontSize: ["28px", "32px", "36px", "42px", "48px"],
    fontWeight: "400",
    color: "headingColor",
    letterSpacing: "-0.025em",
    mb: "28px",
    textAlign: "center",
    lineHeight: "1.25",
  },
  description: {
    fontSize: ["15px", "15px", "16px", "16px", "16px"],
    color: "#5c636c",
    lineHeight: "2.1",
    textAlign: "center",
    mb: ["35px", "35px", "40px", "60px"],
  },
  ImageOne: {
    ml: "auto",
    mr: "auto",
  },
  buttonWrapper: {
    flexBox: true,
    justifyContent: "center",
  },
  btnStyle: {
    minWidth: "156px",
    fontSize: ["13px", "14px"],
    fontWeight: "500",
    colors: "secondaryWithBg",
    pl: ["15px", "30px"],
    pr: ["15px", "30px"],
  },
  outlineBtnStyle: {
    minWidth: "156px",
    fontSize: "16px",
    fontWeight: "500",
    color: "#0f2137",
    colors: "secondary",
  },
};

export default TrialSection;
