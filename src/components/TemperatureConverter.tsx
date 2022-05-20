import React, { ReactElement } from 'react';
import { InputNumber, Button, Space, Typography, Switch } from 'antd';

interface ITemperature {
  celsuisToFarenheight: boolean;
}

const CELSIUS_TO_FARENHEIGHT = (c: number): number => {
  return (c * 9) / 5 + 32;
};

const FARENHEIGHT_TO_CELSIUS = (f: number): number => {
  return ((f - 32) * 5) / 9;
};

const { Title } = Typography;

export default function TemperatureConverter(): ReactElement {
  const [value, setValue] = React.useState<number>(0);
  const [result, setResult] = React.useState<number>(0);
  const [conversion, setConversion] = React.useState<ITemperature>({
    celsuisToFarenheight: true,
  });

  console.log(conversion, result, value);

  const convert = (n: number): void => {
    if (conversion.celsuisToFarenheight === true) {
      setResult(CELSIUS_TO_FARENHEIGHT(n));
    } else {
      setResult(FARENHEIGHT_TO_CELSIUS(n));
    }
  };

  const handleOnClick = (checked: boolean, event: MouseEvent) => {
    event.preventDefault();
    if (checked) {
      setConversion({ celsuisToFarenheight: true });
    } else {
      setConversion({ celsuisToFarenheight: false });
    }
  };

  return (
    <>
      <Title>{result}</Title>
      <Switch
        defaultChecked
        onChange={handleOnClick}
        checkedChildren="°C =>°F"
        unCheckedChildren="°F =>°C"
      />
      <InputNumber min={-100} max={100} value={value} onChange={convert} />
    </>
  );
}
