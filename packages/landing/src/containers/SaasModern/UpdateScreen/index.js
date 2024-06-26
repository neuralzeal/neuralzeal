import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-icons-kit';
import Tabs, { TabPane } from 'rc-tabs';
import 'rc-tabs/assets/index.css';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import NextImage from 'common/components/NextImage';
import Container from 'common/components/UI/Container';
import TiltShape from '../TiltShape';

import SectionWrapper from './updateScreen.style';
import { SCREENSHOTS } from 'common/data/SaasModern';

const UpdateScreen = ({ secTitleWrapper, secText, secHeading }) => {
  return (
    <SectionWrapper>
      <TiltShape />
      <Container>
        <Box {...secTitleWrapper}>
          <Text {...secText} content="SERVICES" />
          <Heading {...secHeading} content="Services we offer to our customers" />
        </Box>
        <Tabs className="update-screen-tab">
          {SCREENSHOTS.map((item, index) => (
            <TabPane
              forceRender={true}
              tab={
                <>
                  <Icon icon={item.icon} size={24} />
                  {item.title}
                </>
              }
              key={index + 1}
            >
              <NextImage src={item.image} alt={`screenshot-${index + 1}`} />
            </TabPane>
          ))}
        </Tabs>
      </Container>
    </SectionWrapper>
  );
};

UpdateScreen.propTypes = {
  secTitleWrapper: PropTypes.object,
  secText: PropTypes.object,
  secHeading: PropTypes.object,
};

UpdateScreen.defaultProps = {
  secTitleWrapper: {
    mb: ['60px', '80px'],
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#fff',
    mb: '5px',
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '500',
    color: '#fff',
    letterSpacing: '-0.025em',
    mb: '0',
    lineHeight: '1.67',
  },
};

export default UpdateScreen;
