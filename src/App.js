import './App.css';

import React, { useState, useEffect } from 'react';

import ProgressPage from './Components/ProgressPage';
// import LandingPage from './Components/LandingPage';
// import MyCarousel from './Components/MyCarousel';
// import GitHubLink from './Components/GitHubLink';
import withTheme from './Components/HOC/withTheme';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <>
    <ProgressPage />
  </>
)

export default withTheme(App);
