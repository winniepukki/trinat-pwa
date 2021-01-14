import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import Forehead from '../Forehead/Forehead';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';
import Blockquote from '../Blockquote/Blockquote';
import Story from '../Story/Story';
import Contact from '../Contact/Contact';
import FoodMenu from '../FoodMenu/FoodMenu';
import Starters from '../Starters/Starters';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleCallback = this.handleCallback.bind(this);
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  handleCallback(callbackData) {
    if (callbackData === undefined) {
      return;
    }
    this.changeLanguage(callbackData);
  }

  changeLanguage(language) {
    const { i18n } = this.props;
    i18n.changeLanguage(language);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Forehead parentCallback={this.handleCallback} />
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
}

App.propTypes = {
  i18n: PropTypes.instanceOf(Object).isRequired
};

export default withTranslation()(App);
