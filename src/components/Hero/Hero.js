import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        I am  Karan Vaswani,<br />
        A Mobile and Full Stack <br />Web Developer
      </SectionTitle>
      <SectionText>
        I am a Full Stack Mobile and Website Developer with a passion for learning new technologies and building applications. I am currently a Pre-Final Year Student pursuing Bachelor of Technology (Majors in Computer Science) from Inderprastha Engineering College, Ghaziabad.
      </SectionText>
      <Button onClick={() => window.location = 'mailto:karanvaswani2002@gmail.com?subject=I want to contact for a project '}>
        Got a Project?<br />Let's Talk
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;