import React, { ReactElement } from 'react';
import './header.css';

interface Props {
  text: string;
}

export default function Header({ text }: Props): ReactElement {
  return <b className="header">{text}</b>;
}
