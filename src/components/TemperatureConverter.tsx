import React, { ReactElement } from 'react';
import { InputNumber, Button, Space, Typography } from 'antd';

const CELSIUS_TO_FARENHEIGHT = (f: number): number => {
  return (f * 9) / 5 + 32;
};

const FARENHEIGHT_TO_CELSIUS = (f: number): number => {
  return f - 32 / 1.8;
};

const { Title } = Typography;

export default function TemperatureConverter(): ReactElement {
  const [value, setValue] = React.useState<number>(0);
  const [result, setResult] = React.useState<number>(0);

  const convert = (n: number): void => {
    setResult(CELSIUS_TO_FARENHEIGHT(n));
  };

  return (
    <Space>
      <Title>{result}</Title>
      <InputNumber min={-100} max={100} value={value} onChange={convert} />
      <Button
        type="primary"
        onClick={() => {
          setValue(0);
        }}
      >
        Reset
      </Button>
    </Space>
  );
}
