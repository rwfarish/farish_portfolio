import React from 'react';
import { Divider } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import {  Skills, Work, Intro, Header, Footer } from './components';

import { skills, projects } from './data';

const MyPage = () => (
  <div>
    <Header /> 
    <Section>
    <Intro /> 
    </Section>
    <SectionAlternate>
      <Skills data={skills} />
    </SectionAlternate>
    <Section>
        <Work data={projects} />
      </Section>
    <Footer /> 
    <Divider />
  </div>
);

export default MyPage;
