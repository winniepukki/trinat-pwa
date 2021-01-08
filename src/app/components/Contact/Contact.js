import React from 'react';
import { withTranslation } from 'react-i18next';

import './contact.style.scss';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
          values: {
              fullName: '',
              email: '',
              review: ''
          }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            values: { ...this.state.values, [e.target.name]: e.target.value }
        });
    }

    handleSubmit = async e => {
        e.preventDefault();
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.open("POST",
            "https://api.cream.camp/public/trinat/contact/add?fullName=" + this.state.values.fullName
            + "&email=" + this.state.values.email + "&review=" + this.state.values.review, true);
        xmlHttp.send();
    };

    render() {
        const { t } = this.props;
        return <div className="container">
            <div className="parallax-section parallax-section-contact">
                <div className="inner-container inner-container-contact">
                    <h3>
                        <p className="parallax-title">{t('contact.title')}</p>
                    </h3>
                    <p className="simple-text">+371 20000000 – info@trinat.lv</p>
                    <p className="simple-text">{t('contact.text')}</p>
                    <form autoComplete="off" onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            className="contact-control"
                            value={this.state.values.fullName}
                            name="fullName"
                            onChange={this.handleChange}
                            placeholder={t('contact-form.fullName')}
                        />
                        <input
                            type="email"
                            className="contact-control"
                            value={this.state.values.email}
                            name="email"
                            onChange={this.handleChange}
                            placeholder={t('contact-form.email')}
                        />
                        <input
                            type="text"
                            className="contact-control"
                            value={this.state.values.review}
                            name="review"
                            onChange={this.handleChange}
                            placeholder={t('contact-form.review')}
                        />
                        <button className="button-default button-dark">{t('send')}</button>
                    </form>
                </div>
            </div>
        </div>
    }
}

export default withTranslation()(Contact);
