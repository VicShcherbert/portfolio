import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { MainTitle } from './components/main-title';
import { Headshot } from './components/headshot';
import { Subtitle } from './components/subtitle';
import { WorkExperience } from './components/work-experience';
import { ProjectExperience } from './components/project-experience';
import { LeadershipExperience } from './components/leadship-experience';
import { Links } from './components/links';
import { Education } from './components/education';

export const App = () => {
  return (
    <div id='main-container'>
      <Headshot />
      <MainTitle />
      <Subtitle />
      <Links />
      <WorkExperience />
      <Education />
      <ProjectExperience />
      <LeadershipExperience />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
