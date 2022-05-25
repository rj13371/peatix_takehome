import React, { ReactElement, useLayoutEffect, useRef } from 'react';
import { IThermometor } from './IThermometor';
import { gsap } from 'gsap';
import './Thermometor.css';

//takes in a number from the temperature converter sibling component and changes the elements height propery
//Params: conversion: number
//Returns: divs in the shape of a thermometor

export default function Thermometor({
  conversion,
}: IThermometor): ReactElement {
  const boxRef = useRef<HTMLDivElement>(null);

  //useLayoutEffect is the same as useEffect but runs before DOM has been loaded
  useLayoutEffect(() => {
    const animation = gsap.to(boxRef.current, {
      height: conversion,
    });

    // cleanup function will be called when component is removed
    return () => {
      animation.kill();
    };
  }, [conversion]);

  return (
    <div className="thermometer">
      {' '}
      <div className="thermometer-body"> </div>
      <div className="tube" ref={boxRef}></div>
      <div className="thermometer-bulb">
        <div className="thermometer-mercury"></div>
      </div>
    </div>
  );
}
