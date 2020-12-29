import React from 'react';
import {withTranslation} from 'react-i18next';
import './menu.style.scss';
import Reservation from "../Reservation/Reservation";

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            menu: true
        };
        this.handleReservation = this.handleReservation.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleReservation() {
        this.setState({
            visible: !this.state.visible
        })
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
        const {t} = this.props;
        return <div>
            {this.state.visible ? <Reservation handler={this.handleReservation}/> : ''}
            <div className={ this.state.menu ? 'menu' : 'menu test-menu' }>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-6 col-sm-4">
                            <a href="/" className="homepage-uri">
                                <h5>
                                    <p>{t('trinat.title')}</p>
                                    <p>&nbsp;{t('trinat.type')}</p>
                                </h5>
                            </a>
                        </div>
                        <div className="col-6 col-sm-8">
                            <ul className="nav custom-flexbox custom-justify-spa custom-align-ic">
                                {
                                    Object.values(t('menu', { returnObjects: true })).map((item, index) => {
                                        return <li key={index}><a href="#">{item}</a></li>
                                    })
                                }
                                <li>
                                    <div className="reservation">
                                        <a className="reservation-button"
                                           onClick={this.handleReservation}>{t('reservation')}</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default withTranslation()(Menu);
