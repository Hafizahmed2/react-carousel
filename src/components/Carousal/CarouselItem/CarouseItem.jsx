import React from 'react';
import style from './index.module.css'
export const CarouselItem = ({ children, width }) => {
  return (
    <div className={style.carousel_item} style={{ width: width }}>
      {children}
    </div>
  );
};
