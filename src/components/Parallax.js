import React, { useContext, useRef, useEffect } from "react";
import { AppContext } from "../context/app-context";

const Parallax = ({ children, min, max, className, ...params }) => {
  const context = useContext(AppContext);
  const item = useRef();

  useEffect(() => {
    getScrollPosition();
  }, [context.scrollY]);

  const getRound = number => {
    return Math.round(number * 100) / 100;
  };

  const getScrollPosition = () => {
    const scrollPositionTop = -context.scrollY | 0;
    const scrollPositionBottom = scrollPositionTop + window.innerHeight;
    const itemPosition = item.current.offsetTop;
    const itemHeight = item.current.offsetHeight;
    const itemPositionMaxPosition = itemPosition + itemHeight;

    const rangeMin = scrollPositionBottom;
    const rangeMax = scrollPositionTop;

    const isVisible =
      itemPosition <= rangeMin && itemPositionMaxPosition >= rangeMax;

    // const percent =
    //   (1 / (rangeMin - rangeMax + itemHeight)) *
    //   (itemPosition - rangeMax + itemHeight / 2);
    // const percent = rangeMax;
    const percent =
      (rangeMin - itemPosition) / (rangeMin - rangeMax + itemHeight);

    const delta = percent * (max + -min);

    // console.log(delta  );

    item.current.style.transform = `translate3d(0, ${delta}px, 0)`;
  };

  return (
    <div ref={item} className={`parallax ${className}`} {...params}>
      {children}
    </div>
  );
};

export default Parallax;