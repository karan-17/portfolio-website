import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillFilePdf } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom:'20px'}}>
          <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
        </a>
        </Link>
        </Div1> 
        <Div2>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
        <Link href="#accomplish">
          <NavLink>Accomplishments</NavLink>
        </Link>
        </Div2>
        <Div3>
          <SocialIcons href="https://github.com/karan-17/">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/karan-v-270102/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/_karan_1.7_/">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://drive.google.com/file/d/1m1yTl3iyvdN5BoeQLZYA6zfihKtSy3q8/view?usp=sharing">
            <AiFillFilePdf size="3rem" />
          </SocialIcons>
        </Div3>
  </Container>
);

export default Header;
