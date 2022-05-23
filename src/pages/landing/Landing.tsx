import React, { ReactElement } from 'react';
import { ToggleDarkModeButton } from '../../components/ThemeButton';
import TemperatureConverter from '../../components/Temperature/TemperatureConverter';
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
