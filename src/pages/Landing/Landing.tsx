import React, { ReactElement } from 'react';
import { ToggleDarkModeButton } from '../../components/ThemeButton';
import { TemperatureConverter } from '../../components/Temperature/';
import { Typography, Space } from 'antd';

const { Title } = Typography;

export default function Landing(): ReactElement {
  return (
    <Space direction="vertical">
      <p>Temperature Converter</p>
      <TemperatureConverter />
      <ToggleDarkModeButton />
    </Space>
  );
}
