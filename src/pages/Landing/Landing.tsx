import React, { ReactElement } from 'react';
import { ToggleThemeButton } from '../../features/LightDarkTheme/index';
import { TemperatureConverter } from '../../features/Temperature/TemperatureConverter';
import { Space } from 'antd';
import { Header } from '../../components/header';

export default function Landing(): ReactElement {
  return (
    <Space direction="vertical">
      <Header text={'Temperature Converter'} />
      <TemperatureConverter />
      <ToggleThemeButton />
    </Space>
  );
}
