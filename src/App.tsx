import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import GlobalStyle, { colors } from './App.styles';
import About from './components/About';
import Categories from './components/Categories';
import CategoryColorContext from './components/CategoryColorContext';
import Header from './components/Header';
import Home from './components/Home';
import Hotlines from './components/Hotlines';
import PrivacyPolicy from './components/PrivacyPolicy';
import Resource from './components/Resource';
import Search from './components/Search';
import TermsOfUse from './components/TermsOfUse';

const {
  Food,
  Health,
  Hygiene,
  JobTraining,
  Resources,
  Shelters,
  SocialServices,
  Transit,
  Wifi
} = Categories;

const App = () => (
  <>
    <GlobalStyle />
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/shelters" component={Shelters} />
        <Route exact path="/job-training" component={JobTraining} />
        <Route exact path="/health" component={Health} />
        <Route exact path="/hygiene" component={Hygiene} />
        <Route exact path="/hotlines" component={Hotlines} />
        <Route exact path="/food" component={Food} />
        <Route exact path="/privacy-policy" component={PrivacyPolicy} />
        <Route exact path="/transit" component={Transit} />
        <Route exact path="/resource" component={Resource} />
        <Route exact path="/resources" component={Resources} />
        <Route exact path="/social-services" component={SocialServices} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/terms-of-use" component={TermsOfUse} />
        <Route exact path="/wifi" component={Wifi} />
      </div>
    </Router>
  </>
);

export default App;
