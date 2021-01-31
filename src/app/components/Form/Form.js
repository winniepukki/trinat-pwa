import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import firebase from '../../util/firebase';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      starter: {
        title: '',
        ingredients: '',
        price: ''
      }
    };

    this.createStarter = this.createStarter.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    const { starter } = this.state;

    this.setState({
      starter: {
        ...starter,
        [evt.target.name]: evt.target.value
      }
    });
  }

  createStarter() {
    const starterRef = firebase.database().ref('Starter');
    const { starter: { title, ingredients, price } } = this.state;

    const starter = {
      title,
      ingredients,
      price
    };
    starterRef.push(starter);
  }

  render() {
    const { t } = this.props;
    const { starter: { title, ingredients, price } } = this.state;

    return (
      <div className="container">
        <h3>
          <p className="parallax-headline">Administration</p>
          <p className="parallax-title">
            {t('admin-zone.starter-add')}
          </p>
          <p className="parallax-description">
            {t('admin-zone.starter-add-description')}
          </p>
        </h3>

        <input
          className="contact-control"
          type="text"
          name="title"
          value={title}
          onChange={this.handleChange}
          placeholder={t('starter-form.title')}
        />

        <input
          className="contact-control"
          type="text"
          name="ingredients"
          value={ingredients}
          onChange={this.handleChange}
          placeholder={t('starter-form.ingredients')}
        />

        <input
          className="contact-control"
          type="number"
          name="price"
          value={price}
          onChange={this.handleChange}
          placeholder={t('starter-form.price')}
        />

        <button
          type="button"
          className="button-default button-dark"
          onClick={this.createStarter}
          disabled={!title || !ingredients || !price}
        >
          +
          {t('add')}
        </button>
      </div>
    );
  }
}

Form.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation()(Form);
