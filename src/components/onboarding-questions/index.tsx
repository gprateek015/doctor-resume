'use client';

import React, { useState } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { Righteous } from 'next/font/google';

import OnboardingIcon from '@/assets/onboarding2.png';
import { Heading, Option, Options, PageNavButton } from './styles';
import WorkExperience from './work-experience';
import WorkExperienceDetails from './work-experience-details';
import HighestEducation from './highest-education';
import ContactDetails from './contact-details';
import Degrees from './degrees';
import EducationalDetails from './educational-details';
import ProjectDetails from './project-details';
import CodingProfiles from './coding-profile';

const righteous = Righteous({
  weight: ['400'],
  subsets: ['latin']
});

const OnboardingQuestions = () => {
  const [page, setPage] = useState<number>(0);
  const OnboardingPage = () => {
    switch (page) {
      case 0:
        return <WorkExperience />;
      case 1:
        return <WorkExperienceDetails />;
      case 2:
        return <ContactDetails />;
      case 3:
        return <HighestEducation />;
      case 4:
        return <Degrees />;
      case 5:
        return <EducationalDetails />;
      case 6:
        return <ProjectDetails />;
      case 7:
        return <CodingProfiles />;
    }
  };
  const nextPage = () => {
    setPage(page => page + 1);
  };
  const prevPage = () => {
    setPage(page => Math.max(0, page - 1));
  };
  return (
    <Grid
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '100px',
        borderRadius: '20px',
        padding: '20px 40px',
        margin: 'auto 150px',
        width: '100%',
        height: '600px'
      }}
      className={righteous.className}
    >
      <Grid flexGrow={1} height='100%'>
        <Grid
          sx={{
            height: 'calc(100% - 60px)',
            overflowY: 'auto',
            padding: '10px'
          }}
        >
          {OnboardingPage()}
        </Grid>
        <Grid
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '30px'
          }}
        >
          <PageNavButton variant='outlined' onClick={prevPage}>
            Previous
          </PageNavButton>
          <PageNavButton variant='outlined' onClick={nextPage}>
            Next
          </PageNavButton>
        </Grid>
      </Grid>
      <Image
        src={OnboardingIcon}
        alt='icon'
        style={{
          height: '520px',
          width: '350px'
        }}
      />
    </Grid>
  );
};

export default OnboardingQuestions;
