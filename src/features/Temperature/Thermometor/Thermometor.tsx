import React, { ReactElement, useEffect, useRef } from 'react';
import { IThermometor } from './IThermometor';
import { gsap } from 'gsap';
import './Thermometor.css';

//takes in a number from the temperature converter sibling component and changes the elements height propery
//Params: conversion: number
//Returns: ReactElement

export default function Thermometor({
  conversion,
}: IThermometor): ReactElement {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(boxRef.current, {
      height: conversion,
    });
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
