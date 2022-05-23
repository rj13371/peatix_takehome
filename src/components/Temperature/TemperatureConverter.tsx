import React, { ReactElement, useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { InputNumber, Typography, Switch, Space, Card, Tooltip } from 'antd';
import { ITemperature } from '../../interfaces/ITemperature';
import '../../styles/TemperatureConverter.css';
import { Thermometor } from '../Thermometor';

const CELSIUS_TO_FARENHEIT = (c: number): number => {
  return (c * 9) / 5 + 32;
};

const FARENHEIT_TO_CELSIUS = (f: number): number => {
  return ((f - 32) * 5) / 9;
};

const { Text } = Typography;

export default function TemperatureConverter(): ReactElement {
  const { dark } = useContext(ThemeContext);
  const [value, setValue] = useState<number>(0);
  const [result, setResult] = useState<number>(32);
  const [conversion, setConversion] = useState<ITemperature>({
    formula: 'celsuisToFahrenheit',
  });

  const convert = (n: number): void => {
    setValue(n);
    if (conversion.formula === 'celsuisToFahrenheit') {
      setResult(CELSIUS_TO_FARENHEIT(n));
    } else {
      setResult(FARENHEIT_TO_CELSIUS(n));
    }
  };

  const handleOnClick = (checked: boolean, event: MouseEvent) => {
    event.preventDefault();
    if (checked) {
      setConversion({ formula: 'celsuisToFahrenheit' });
    } else {
      setConversion({ formula: 'farenheitToCelsuis' });
    }

    //If the user removes the number input and switches the conversion, input value will be null, so reset input to 0

    if (value === null) {
      setResult(0);
    } else {
      setResult(value);
    }

    if (result === null) {
      setValue(0);
    } else {
      setValue(result);
    }
  };

  const valueTooltip = value ? (
    <span className="numeric-input-title">{value ? value : '-'}</span>
  ) : (
    'Input a number'
  );

  const resultTooltip = result ? (
    <span className="numeric-input-title">{result ? result : '-'}</span>
  ) : (
    'Conversion'
  );

  return (
    <>
      <Space direction="vertical">
        <div>
          <Space>
            <Card
              title={
                conversion.formula === 'farenheitToCelsuis'
                  ? 'Fahrenheit'
                  : 'Celsuis'
              }
              className={dark ? 'Card DarkCard' : 'Card LightCard'}
            >
              <Tooltip
                trigger={['hover']}
                title={valueTooltip}
                placement="topLeft"
                overlayClassName="numeric-input"
              >
                <InputNumber
                  aria-label="Number input"
                  size="large"
                  value={value}
                  defaultValue={0}
                  onChange={convert}
                />
              </Tooltip>
            </Card>

            <Card
              title={
                conversion.formula === 'celsuisToFahrenheit'
                  ? 'Fahrenheit'
                  : 'Celsuis'
              }
              className={dark ? 'Card DarkCard' : 'Card LightCard'}
            >
              <Tooltip
                trigger={['hover']}
                title={resultTooltip}
                placement="topLeft"
                overlayClassName="numeric-input"
              >
                <Text ellipsis={true}>{result}</Text>
              </Tooltip>
            </Card>
            <Thermometor conversion={result} />
          </Space>
        </div>

        <Switch
          aria-label="Celsuis / Farenheight switch"
          defaultChecked
          onChange={handleOnClick}
          checkedChildren="°C =>°F"
          unCheckedChildren="°F =>°C"
        />
      </Space>
    </>
  );
}
