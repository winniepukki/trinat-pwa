/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/
import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import firebase from '@util/firebase';
import {
    STARTER_LANG_LV,
    STARTER_LANG_RU,
    LANG_CODE_LV,
    LANG_CODE_RU
} from './Starters.config';

import './Starters.style.scss';
import Starter from '@component/Starter/Starter';

class Starters extends React.Component {
    static propTypes = {
        t: PropTypes.func.isRequired,
        languageCode: PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            data: {},
            loading: false
        };

        this.getStartersFirebaseData = this.getStartersFirebaseData.bind(this);
    }

    componentDidMount() {
        this.getStartersFirebaseData();
    }

    componentDidUpdate() {
        this.getStartersFirebaseData();
    }

    getStartersFirebaseData() {
        const {
            languageCode = ''
        } = this.props;
        let startersLang;

        switch (languageCode) {
        case LANG_CODE_LV:
            startersLang = STARTER_LANG_LV;
            break;
        case LANG_CODE_RU:
            startersLang = STARTER_LANG_RU;
            break;
        default:
            startersLang = STARTER_LANG_LV;
            break;
        }

        const startersRef = firebase.database().ref(startersLang);
        startersRef.once('value').then((dataSnapshot) => {
            this.response = dataSnapshot.val();
            this.setState({
                data: this.response,
                loading: true
            });
        });
    }

    renderStartersFirebaseData() {
        const { loading, data } = this.state;
        const { t } = this.props;
        const startersList = [];

        if (!data || !Object.keys(data).length) {
            return t('loading');
        }

        Object.values(data).filter((item) => {
            if (!item) {
                return null;
            }

            startersList.push(item);

            return startersList;
        });

        return loading ? (
            startersList.map((starter) => {
                if (!starter) {
                    return null;
                }

                const { title } = starter;

                if (!title.length) {
                    return null;
                }

                return (<Starter starter={ starter } key={ title } />);
            })
        ) : t('loading');
    }

    render() {
        const { t } = this.props;

        return (
            <div className="Starters">
                <section className="starters-menu" style={ { marginBottom: '60px' } }>
                <div className="section-title">
                    <h3>
                        <div className="parallax-headline">Amazing</div>
                        <div className="parallax-title">{ t('delicious') }</div>
                    </h3>
                </div>
                </section>
                <div className="container">
                <div className="parallax-section parallax-section-starters">
                    <div className="inner-container inner-container-starters">
                    <h3>
                        <p className="parallax-title">{ t('starters') }</p>
                    </h3>
                    <p className="simple-text">{ t('starters-info') }</p>
                    { this.renderStartersFirebaseData() }
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default withTranslation()(Starters);
