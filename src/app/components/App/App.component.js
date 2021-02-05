import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import Forehead from '../Forehead/Forehead.component';
import Hero from '../Hero/Hero.component';
import Footer from '../Footer/Footer';
import Blockquote from '../Blockquote/Blockquote.component';
import Story from '../Story/Story.component';
import Contact from '../Contact/Contact.component';
import FoodMenu from '../FoodMenu/FoodMenu.component';
import Starters from '../Starters/Starters';

class AppComponent extends React.Component {
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

  getCurrentLanguage() {
    const { i18n } = this.props;
    const { language } = i18n;

    return language;
  }

  changeLanguage(language) {
    const { i18n } = this.props;
    i18n.changeLanguage(language);
  }

  render() {
    const { t } = this.props;
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Forehead parentCallback={this.handleCallback} />
            <Hero
              welcomeMessage={t('welcome')}
              titleCaptionFront={t('trinat.title')}
              titleCaptionBold={t('trinat.type')}
              subtitle={t('hero.title')}
            />
            <Blockquote
              content={t('blockquote.blockquote-content')}
              author={t('blockquote.author')}
              description={t('blockquote.description')}
            />
            <Story
              title={t('story.title')}
              description={t('story.description')}
              storyText={t('story.text')}
            />
            <FoodMenu
              languageCode={this.getCurrentLanguage()}
            />
            <Starters
              languageCode={this.getCurrentLanguage()}
            />
            <Contact />
            <Footer />
          </Route>
        </Switch>
      </Router>
    );
  }
}

AppComponent.propTypes = {
  t: PropTypes.func.isRequired,
  i18n: PropTypes.instanceOf(Object).isRequired
};

export default withTranslation()(AppComponent);
