import React, { ReactElement, useContext, useState } from 'react';
import { ThemeContext } from '../../../state/ThemeContext';
import { InputNumber, Typography, Switch, Space, Card, Tooltip } from 'antd';
import { ITemperature } from './ITemperature';
import './TemperatureConverter.css';
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
  const [conversionInput, setConversionInput] = useState<number>(0);
  const [result, setResult] = useState<number>(32);
  const [conversion, setConversion] = useState<ITemperature>({
    formula: 'celsuisToFahrenheit',
  });

  //takes in a number and converts it to celsuis or farenheit, updates the conversion result state
  //Params: n: number
  //Returns: void

  const convert = (n: number): void => {
    setConversionInput(n);
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

    //If the user removes the number input and switches the conversion, conversionInput will be null, so reset input to 0

    if (conversionInput === null) {
      setResult(0);
    } else {
      setResult(conversionInput);
    }

    if (result === null) {
      setConversionInput(0);
    } else {
      setConversionInput(result);
    }
  };

  const valueTooltip = conversionInput ? (
    <span className="numeric-input-title">
      {conversionInput ? conversionInput : '-'}
    </span>
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
                  value={conversionInput}
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
            <Thermometor
              conversion={
                conversion.formula === 'celsuisToFahrenheit'
                  ? result
                  : conversionInput
              }
            />
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
