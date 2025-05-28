import React from 'react';
import { Container, Flex, Box } from 'theme-ui';
import ContentContainer from '@solid-ui-components/ContentContainer';
import Reveal from '@solid-ui-components/Reveal';
import Divider from '@solid-ui-components/Divider';
import ContentText from '@solid-ui-components/ContentText';
import ContentButtons from '@solid-ui-components/ContentButtons';
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent';
import './feature.css';

const CustomIcon = ({ content, size = 'sm', ...props }) => {
  if (!content?.src) return null;

  const sizeMap = {
    sm: 64,
    md: 64,
  };

  return (
    <Box
      as="div"
      sx={{
        width: sizeMap[size] || 64,
        height: sizeMap[size] || 64,
        backgroundColor: content.bg || 'transparent',
        borderRadius: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mr: 3
      }}
    >
      <Box
        as="img"
        src={content.src}
        alt="icon"
        sx={{
          width: '60%',
          height: '60%',
          objectFit: 'contain',
        }}
      />
    </Box>
  );
};

const FeaturesBlock02 = ({ content: { text, collection } }) => (
  <Container sx={{ textAlign: 'center' }}>
    <Reveal effect='fadeInUp'>
      {collection && (
        <>
          <Divider />
          <Flex sx={{ flexWrap: 'wrap', m: -3 }}>
            {collection.map(({ text, icon, buttons, container }, index) => (
              <Box
                key={`item-${index}`}
                sx={{
                  flexBasis: ['100%', null, '50%'],
                  textAlign: 'left',
                  p: 3
                }}
              >
                <ContentContainer content={container} variant='cards.paper-lg' sx={{ p: 5 }}>
                  {text?.[0] && (
                    <Flex sx={{ alignItems: 'center', mb: 4 }}>
                      <Box sx={{ flexShrink: 0 }}>
                        <CustomIcon content={icon} size='sm' />
                      </Box>
                      <Box sx={{ ml: 1, flexGrow: 1 }}>
                        <ContentText content={text[0]} mb='0' />
                      </Box>
                    </Flex>

                  )}
                  <ContentText content={text?.[1]} />
                  {buttons && <ContentButtons content={buttons} mt={3} />}
                </ContentContainer>
              </Box>
            ))}
          </Flex>
        </>
      )}
    </Reveal>
  </Container>
);

export default WithDefaultContent(FeaturesBlock02);
