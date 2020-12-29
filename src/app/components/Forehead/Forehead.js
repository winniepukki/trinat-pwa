import React from 'react';
import {withTranslation} from 'react-i18next';
import i18next from 'i18next';

import './forehead.style.scss';

import lv from './latvia.svg';
import ru from './russia.svg';

class Forehead extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: true
        };
        this.handleScroll = this.handleScroll.bind(this);
        this.handleLanguage = this.handleLanguage.bind(this);
    }
    handleLanguage(event) {
        const { i18n } = this.props;
        if(i18n.language === 'lv') {
            this.props.parentCallback('ru');
        }
        else {
            this.props.parentCallback('lv');
        }
    }
    handleScroll(event) {
        let currentScrollPos = window.pageYOffset;
        let heroFrame = document.getElementById('hero').offsetHeight;
        if(currentScrollPos > heroFrame) {
            this.setState({
                menu: false
            });
        }
        else {
            this.setState({
                menu: true
            });
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }
    render() {
        return <div className={ this.state.menu ? 'forehead' : 'hidden' }>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col forehead-item">
                        <span><i className="fas fa-map-marker-alt"></i> <a href={this.props.address.url}>{this.props.address.line}</a></span>
                        <span><i className="fas fa-phone-alt"></i><a href={'tel:' + this.props.phone}>{this.props.phone}</a></span>
                    </div>
                    <div className="col forehead-item custom-tar">
                        <a href="#"><i className="fab fa-facebook-square"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a onClick={this.handleLanguage}>{
                            i18next.language === 'lv' ?
                                <span><img src={ru} alt="Русский язык" className="language-switcher"/><span>по-русски</span></span> :
                                <span><img src={lv} alt="Latviešu valoda" className="language-switcher"/><span>latviski</span></span>
                        }</a>
                    </div>
                </div>
            </div>
        </div>
    }
}

Forehead.defaultProps = {
    address: {
        line: 'Kurzemes prospekts 92a, Imanta, Riga, Latvia',
        url: 'https://goo.gl/maps/fm1VYskY9HckKctq6'
    },
    phone: '+371 20000000',
};

export default withTranslation()(Forehead);
