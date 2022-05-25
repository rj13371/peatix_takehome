import React, { ReactElement } from 'react';
import './header.css';

interface Props {
  text: string;
}

// Takes in text from parent component and displays a large text header
//Params: text: string
//Returns: a Header

export default function Header({ text }: Props): ReactElement {
  return <b className="header">{text}</b>;
}
