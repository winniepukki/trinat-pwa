import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { buyCake } from '../../store';

export const mapStateToProps = (state) => ({
  numOfCakes: state.cakeList.numOfCakes
});

export const mapDispatchToProps = (dispatch) => ({
  buyCake: (number) => dispatch(buyCake(number))
});

class CakeStoreComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 1
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    const {
      numOfCakes,
      // eslint-disable-next-line no-shadow
      buyCake,
      t
    } = this.props;

    const { value } = this.state;

    return (
      <div className="container">
        <p>{ t('copyright') }</p>
        <p>{ numOfCakes }</p>
        <input type="text" onChange={(e) => this.handleInputChange(e)} />
        <button type="button" onClick={() => buyCake(value)}>
          Buy&nbsp;
          { value }
          &nbsp;cakes!
        </button>
      </div>
    );
  }
}

CakeStoreComponent.propTypes = {
  t: PropTypes.func.isRequired,
  buyCake: PropTypes.func.isRequired,
  numOfCakes: PropTypes.number.isRequired
};

export default
connect(mapStateToProps, mapDispatchToProps)(withTranslation()(CakeStoreComponent));
