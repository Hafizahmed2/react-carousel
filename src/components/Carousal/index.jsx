import React, { useState } from 'react';
import LeftArrow from '../../assets/images/arrow_left.svg';
import RightArrow from '../../assets/images/arrow_right.svg';
import style from './index.module.css';
const Carousal = ({ children }) => {
  const [navigation, setNavigation] = useState(0);

  const updateState = newIndex => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 4;
    } else if (newIndex >= React.Children.count(children) - 4) {
      newIndex = 0;
    }
    setNavigation(newIndex);
  };

  return (
    <div className={style.carousel_wrapper}>
      <img
        onClick={() => updateState(navigation - 1)}
        src={LeftArrow}
        alt='left-navigation'
        className={style.navigator}
      />
      <div className={style.carousel}>
        <div
          className={style.carousel_inner}
          style={{ transform: `translateX(-${navigation * 210}px)` }}
        >
          {React.Children.map(children, (child, index) => {
            return React.cloneElement(child, { width: '200px' });
          })}
        </div>
      </div>
      <img
        onClick={() => updateState(navigation + 1)}
        src={RightArrow}
        alt='right-navigation'
        className={style.navigator}
      />
    </div>
  );
};

export default Carousal;
