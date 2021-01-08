import React from 'react';
import { withTranslation } from 'react-i18next';

class Blockquote extends React.Component {
  constructor(props) {
    super(props);
    this.renderBlockqouteEntities = this.renderBlockqouteEntities.bind(this);
  }

  renderBlockqouteEntities() {
    const { t } = this.props;
    return (
      Object.entries(t('blockquote', { returnObjects: true })).map((item, index) => <p key={index} className={item[0]}>{item[1]}</p>)
    );
  }

  render() {
    return (
      <div className="container">
        <blockquote className="custom-tac">
          { this.renderBlockqouteEntities() }
        </blockquote>
      </div>
    );
  }
}

export default withTranslation()(Blockquote);
