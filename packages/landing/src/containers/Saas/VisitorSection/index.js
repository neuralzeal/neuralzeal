import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Box from "common/components/Box";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import Button from "common/components/Button";
import Card from "common/components/Card";
import Image from "common/components/Image";
import FeatureBlock from "common/components/FeatureBlock";
import Container from "common/components/UI/Container";
import VisitorSectionWrapper, { SectionObject } from "./visitor.style";

import ImageOne from "common/assets/image/saas/saasvisitor1.png";
import ImageBg from "common/assets/image/saas/visitor_bg.png";
import { Fade, Zoom } from "react-awesome-reveal";

const VisitorSection = ({
  title,
  description,
  textArea,
  imageWrapper,
  btnStyle,
}) => {
  return (
    <VisitorSectionWrapper id="visitorSection">
      <SectionObject>
        <Card className="objectWrapper" {...imageWrapper}>
          <Zoom triggerOnce>
            <Image src={ImageBg?.src} alt="BgImage" />
          </Zoom>
          <Card className="dashboardWrapper" {...imageWrapper}>
            <Fade direction="left" triggerOnce>
              <Image src={ImageOne?.src} alt="VisitorDashboard1" />
            </Fade>
          </Card>
        </Card>
      </SectionObject>
      <Container>
        <Box {...textArea}>
          <FeatureBlock
            title={
              <Heading
                content="Fuel Your Growth with High-Performance Data Analytics"
                {...title}
              />
            }
            description={
              <Text
                content="At NeuralZeal Data Analytics, we harness the power of cutting-edge data processing technologies and scalable architectures to accelerate your journey towards data-driven insights and growth. Our optimized data pipelines and high-performance infrastructure ensure efficient data ingestion, transformation, and analysis, empowering you to make informed decisions and unlock new opportunities for your business."
                {...description}
              />
            }
            button={
              <Link href="#">
                <Button title="HOW IT WORKS" {...btnStyle} />
              </Link>
            }
          />
        </Box>
      </Container>
    </VisitorSectionWrapper>
  );
};

VisitorSection.propTypes = {
  title: PropTypes.object,
  description: PropTypes.object,
  btnStyle: PropTypes.object,
};

VisitorSection.defaultProps = {
  textArea: {
    width: ["100%", "100%", "45%"],
    ml: [0, 0, "58%"],
  },
  imageWrapper: {
    boxShadow: "none",
  },
  title: {
    fontSize: ["20px", "26px", "26px", "36px", "48px"],
    fontWeight: "400",
    color: "#0f2137",
    letterSpacing: "-0.010em",
    mb: "20px",
    maxWidth: ["100%", "100%", "100%", "440px", "440px"],
    lineHeight: "1.5",
  },
  description: {
    fontSize: "16px",
    color: "#343d48cc",
    lineHeight: "1.75",
    mb: "33px",
    maxWidth: ["100%", "100%", "100%", "440px", "440px"],
  },
  btnStyle: {
    minWidth: "156px",
    fontSize: "14px",
    fontWeight: "500",
    color: "#fff",
    borderRadius: "4px",
    pl: "22px",
    pr: "22px",
    colors: "primaryWithBg",
  },
};

export default VisitorSection;
