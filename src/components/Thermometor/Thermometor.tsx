import React, { ReactElement, useEffect, useRef } from 'react';
import { IThermometor } from '../../interfaces/IThermometor';
import { gsap } from 'gsap';
import './Thermometor.css';

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
      <div className="thermometer-body">
        <div className="tube" ref={boxRef}></div>{' '}
      </div>
    </div>
  );
}
