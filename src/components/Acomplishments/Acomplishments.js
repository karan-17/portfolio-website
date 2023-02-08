import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 10, text: 'Open Source Projects'},
  { number: 10, text: 'Clients', },
  { number: 850, text: 'LinkedIn Followers', },
  { number: 400, text: 'Github Contributions', }
];

const Acomplishments = () => (
  <Section id="accomplish">
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
      </Boxes>
  </Section>
);

export default Acomplishments;
