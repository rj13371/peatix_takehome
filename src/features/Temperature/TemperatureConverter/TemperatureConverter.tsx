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
    formula: 'celsiusToFahrenheit',
  });

  //takes in a number and converts it to celsius or farenheit, updates the conversion result state
  //toFixed converts a number to a string with a fixed decimal point. Number then converts a string to a number.
  //Params: n: number
  //Returns: void, sets result state to the output which is then consumed by the UI

  const convert = (n: number): void => {
    setConversionInput(n);
    if (conversion.formula === 'celsiusToFahrenheit') {
      const farenheit = CELSIUS_TO_FARENHEIT(n);
      setResult(Number(farenheit.toFixed(4)));
    } else {
      const celsius = FARENHEIT_TO_CELSIUS(n);
      setResult(Number(celsius.toFixed(4)));
    }
  };

  const handleOnClick = (checked: boolean, event: MouseEvent) => {
    event.preventDefault();
    if (checked) {
      setConversion({ formula: 'celsiusToFahrenheit' });
    } else {
      setConversion({ formula: 'farenheitTocelsius' });
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
                conversion.formula === 'farenheitTocelsius'
                  ? 'Fahrenheit'
                  : 'Celsius'
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
                  type="number"
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
                conversion.formula === 'celsiusToFahrenheit'
                  ? 'Fahrenheit'
                  : 'Celsius'
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
                conversion.formula === 'celsiusToFahrenheit'
                  ? result
                  : conversionInput
              }
            />
          </Space>
        </div>

        <Switch
          aria-label="Celsius / Farenheight switch"
          defaultChecked
          onChange={handleOnClick}
          checkedChildren="°C =>°F"
          unCheckedChildren="°F =>°C"
        />
      </Space>
    </>
  );
}
