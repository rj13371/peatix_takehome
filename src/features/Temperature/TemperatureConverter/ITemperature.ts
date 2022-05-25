export interface ITemperature {
  formula: formulaEnum;
}

type formulaEnum = 'celsiusToFahrenheit' | 'farenheitTocelsius';
