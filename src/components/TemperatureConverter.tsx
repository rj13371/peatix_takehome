import React, { ReactElement } from 'react';
import { InputNumber, Typography, Switch, Space } from 'antd';
import { ITemperature } from '../types/ITemperature';

const CELSIUS_TO_FARENHEIGHT = (c: number): number => {
  return (c * 9) / 5 + 32;
};

const FARENHEIGHT_TO_CELSIUS = (f: number): number => {
  return ((f - 32) * 5) / 9;
};

const { Title } = Typography;

export default function TemperatureConverter(): ReactElement {
  const [value, setValue] = React.useState<number>(0);
  const [result, setResult] = React.useState<number>(32);
  const [conversion, setConversion] = React.useState<ITemperature>({
    celsuisToFarenheight: true,
  });

  const convert = (n: number): void => {
    setValue(n);
    if (conversion.celsuisToFarenheight === true) {
      setResult(CELSIUS_TO_FARENHEIGHT(n));
    } else {
      setResult(FARENHEIGHT_TO_CELSIUS(n));
    }
  };

  const handleOnClick = (checked: boolean, event: MouseEvent) => {
    event.preventDefault();
    console.log(checked);
    if (checked) {
      setConversion({ celsuisToFarenheight: true });
    } else {
      setConversion({ celsuisToFarenheight: false });
    }
    setResult(value);
    setValue(result);
  };

  console.log(value, result);

  return (
    <>
      <Space>
        <InputNumber
          min={-100}
          max={100}
          value={value}
          defaultValue={0}
          onChange={convert}
        />
        <Title>{result}</Title>
      </Space>
      <Switch
        defaultChecked
        onChange={handleOnClick}
        checkedChildren="°C =>°F"
        unCheckedChildren="°F =>°C"
      />
    </>
  );
}
