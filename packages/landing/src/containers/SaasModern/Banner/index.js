import React, { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Icon from "react-icons-kit";
import Box from "common/components/Box";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import Button from "common/components/Button";
import NextImage from "common/components/NextImage";
import Container from "common/components/UI/Container";
import TiltShape from "../TiltShape";
import { BannerWrapper, DiscountWrapper, DiscountLabel } from "./banner.style";
import BannerImage from "common/assets/image/saasModern/banner-image.png";
import { ic_play_circle_filled } from "react-icons-kit/md/ic_play_circle_filled";
import { Fade } from "react-awesome-reveal";
import VideoDialog from "common/components/Dialog/videoDialog";

const BannerSection = ({
  row,
  contentWrapper,
  discountAmount,
  discountText,
  title,
  description,
  imageWrapper,
  buttonWrapper,
  button,
  fillButton,
}) => {
  const [openModal, setModal] = useState(false);
  return (
    <BannerWrapper id="banner_section">
      <TiltShape />
      <Container>
        <Box {...row}>
          <Box {...contentWrapper}>
            <DiscountWrapper>
              <DiscountLabel>
                <Text {...discountAmount} content="" />
                <Text
                  {...discountText}
                  content="Fueling Innovation with Data Wisdom"
                />
              </DiscountLabel>
            </DiscountWrapper>
            <Heading {...title} content="NeuralZeal Analytics" />
            <Text
              {...description}
              content="NeuralZeal Analytics is a forward-thinking company specializing in advanced analytics solutions, with a particular focus on neural networks and deep learning technologies. Founded by a team of seasoned experts in data science, machine learning, and artificial intelligence, we bring together a wealth of experience and a relentless drive to deliver transformative results for our clients."
            />
            <Box {...buttonWrapper}>
              <Link href="#">
                <Button {...fillButton} title="CONTACT US" />
              </Link>
              <VideoDialog
                label={
                  <Link href="#">
                    <Button
                      {...button}
                      title="WATCH VIDEO"
                      icon={<Icon icon={ic_play_circle_filled} size={30} />}
                      iconPosition="left"
                    />
                  </Link>
                }
                content={
                  <div className="video" style={{ margin: "auto" }}>
                    <iframe
                      width="850"
                      height="505"
                      src="https://www.youtube.com/embed/hW98BFnVCm8"
                      title="NeuralZeal Analtics Pvt Ltd"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                }
              />
            </Box>
          </Box>
          <Box {...imageWrapper}>
            <Fade direction="down" triggerOnce>
              <NextImage src={BannerImage} alt="banner image" />
            </Fade>
          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  row: PropTypes.object,
  contentWrapper: PropTypes.object,
  discountAmount: PropTypes.object,
  discountText: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  imageWrapper: PropTypes.object,
  buttonWrapper: PropTypes.object,
  button: PropTypes.object,
  fillButton: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  contentWrapper: {
    width: ["100%", "100%", "80%", "55%", "50%"],
    mb: "40px",
  },
  title: {
    fontSize: ["24px", "32px", "40px", "42px", "46px"],
    fontWeight: "700",
    color: "#fff",
    letterSpacing: "-0.025em",
    mb: ["20px", "25px", "25px", "25px", "25px"],
    lineHeight: "1.2",
    textAlign: "center",
  },
  description: {
    fontSize: ["15px", "16px", "16px", "16px", "16px"],
    color: "#fff",
    lineHeight: "1.75",
    mb: "0",
    textAlign: "center",
  },
  discountAmount: {
    fontSize: ["13px", "14px", "14px", "14px", "14px"],
    fontWeight: "700",
    color: "#00865b",
    mb: 0,
    as: "span",
    mr: "0.4em",
  },
  discountText: {
    fontSize: ["13px", "14px", "14px", "14px", "14px"],
    fontWeight: "700",
    color: "#fff",
    mb: 0,
    as: "span",
  },
  fillButton: {
    type: "button",
    fontSize: ["13px", "14px"],
    fontWeight: "600",
    borderRadius: "4px",
    p: ["0px 15px", "8px 22px"],
    colors: "secondaryWithBg",
    minWidth: ["auto", "150px"],
    height: ["40px", "46px"],
    minHeight: "auto",
  },
  buttonWrapper: {
    flexBox: true,
    justifyContent: "center",
    mt: "35px",
  },
  button: {
    type: "button",
    fontSize: ["13px", "14px"],
    fontWeight: "600",
    borderRadius: "4px",
    p: ["0px 15px", "8px 22px"],
    color: "#fff",
    colors: "secondary",
    height: ["40px", "46px"],
    minHeight: "auto",
  },
};

export default BannerSection;
