import React from 'react';
import {useTranslation} from 'react-i18next';
import firebase from '../../util/firebase';

export default function Starter({starter}) {
    const {t} = useTranslation();
    const deleteStarter = () => {
      const starterRef = firebase.database().ref('Starter').child(starter.id);
      starterRef.remove();
    };

    return <div className="starter-item" key={starter.id}>
        <div className="row">
            <div className="col">
                <p className="starter-title">{starter.title}</p>
                <p className="starter-ingredients">{starter.ingredients}</p>
            </div>
            <div className="col">
                <p className="custom-tar">{starter.price}&euro;</p>
                {/*<button onClick={deleteStarter} style={{margin:'0 0 0 auto'}}>{t('delete')}</button>*/}
            </div>
        </div>
    </div>
}
