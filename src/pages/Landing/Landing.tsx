import React, { ReactElement } from 'react';
import { ToggleDarkModeButton } from '../../features/Light/DarkTheme';
import { TemperatureConverter } from '../../features/Temperature/TemperatureConverter';
import { Space } from 'antd';
import { Header } from '../../components/header';

export default function Landing(): ReactElement {
  return (
    <Space direction="vertical">
      <Header text={'Temperature Converter'} />
      <TemperatureConverter />
      <ToggleDarkModeButton />
    </Space>
  );
}
