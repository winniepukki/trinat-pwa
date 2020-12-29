import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import firebase from '../../util/firebase';

import './starters.style.scss';
import Starter from "./Starter";

function Starters() {
    const [startersList, setStartersList] = useState();
    const {t} = useTranslation();

    useEffect(() => {
        const startersRef = firebase.database().ref('Starter');
        startersRef.on('value', (snapshot) => {
            const starters = snapshot.val();
            const startersList = [];
            for(let id in starters) {
                if(starters.hasOwnProperty(id)) {
                    startersList.push({id, ...starters[id]});
                }
            }
            setStartersList(startersList);
        })
    }, []);
    return <div><section className="starters-menu" style={{marginBottom: '60px'}}>
        <div className="section-title">
            <h3>
                <div className="parallax-headline">Amazing</div>
                <div className="parallax-title">{t('delicious')}</div>
            </h3>
        </div>
    </section>
        <div className="container">
            <div className="parallax-section parallax-section-starters">
                <div className="inner-container inner-container-starters">
                    <h3>
                        <p className="parallax-title">{t('starters')}</p>
                    </h3>
                    <p className="simple-text">{t('starters-info')}</p>
                    {
                        startersList ? startersList.map((starter, index) => {
                            return <Starter starter={starter} key={index}/>
                        }) : ''
                    }
                </div>
            </div>
        </div>
    </div>
}

export default Starters;
