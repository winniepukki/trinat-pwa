import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Forehead from '../Forehead/Forehead';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';
import Blockquote from '../Blockquote/Blockquote';
import Story from '../Story/Story';
import Contact from '../Contact/Contact';
import FoodMenu from '../FoodMenu/FoodMenu';
import Starters from '../Starters/Starters';

function App() {
  const { i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const handleCallback = (callbackData) => {
    if (callbackData === undefined) {
      return;
    }
    changeLanguage(callbackData);
  };
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Forehead parentCallback={handleCallback} />
          <Hero />
          <Blockquote />
          <Story />
          <FoodMenu />
          <Starters />
          <Contact />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
