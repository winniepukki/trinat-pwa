import React from 'react';
import {withTranslation} from "react-i18next";

import './story.style.scss';

class Story extends React.Component {

    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll() {
        let currentScrollPos = window.pageYOffset;
        let innerContainerStory = document.querySelectorAll('.parallax-item');

        if(window.innerWidth > 700) {
            //innerContainerStory.style.transform = `translateY(${currentScrollPos / 16}px)`;
            innerContainerStory.forEach(item => {
                item.style.transform = `translateY(${currentScrollPos / 16}px)`;
            })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    render() {
        const {t} = this.props;
        return <div className="container">
            <div className="parallax-section parallax-section-story">
                <div className="inner-container inner-container-story parallax-item">
                    <h3>
                        <p className="parallax-headline">Discover</p>
                        <p className="parallax-title">{t('story.title')}</p>
                        <p className="parallax-description">{t('story.description')}</p>
                    </h3>
                    <span className="simple-text">
                    {t('story.text')}
                </span>
                </div>
            </div>
        </div>
    }
}

export default withTranslation()(Story);
