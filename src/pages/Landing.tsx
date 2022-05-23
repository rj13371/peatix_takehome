import React, { ReactElement } from 'react';
import { ToggleDarkModeButton } from '../components/ToggleDarkModeButton';
import TemperatureConverter from '../components/TemperatureConverter';
import { Typography } from 'antd';

const { Title } = Typography;

export default function Landing(): ReactElement {
  return (
    <>
      <p>Temperature Converter</p>
      <TemperatureConverter />
      <ToggleDarkModeButton />
    </>
  );
}
