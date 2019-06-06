import React from 'react';

import sunrise from '../../assets/sunrise.png';
import sunset from '../../assets/sunset.png';
import moonrise from '../../assets/moonrise.png';
import moonset from '../../assets/moonset.png';

import s from './SetAndRise.module.css';

const SetAndRise = () => (
  <div className={s.setAndRise}>
    <div className={s.sunBlock}>
      <div className={s.sunrise}>
        <img src={sunrise} alt="Sunrice" className={s.sunriseImage} />
        <p>23:22</p>
      </div>

      <div className={s.sunset}>
        <img src={sunset} alt="Sunrice" className={s.sunsetImage} />
        <p>23:22</p>
      </div>
    </div>

    <div className={s.moonBlock}>
      <div className={s.moonrise}>
        <img src={moonrise} alt="Moonrise" className={s.moonriseImage} />
        <p>23:22</p>
      </div>

      <div className={s.moonset}>
        <img src={moonset} alt="Moonset" className={s.moonsetImage} />
        <p>23:22</p>
      </div>
    </div>
  </div>
);

export default SetAndRise;
