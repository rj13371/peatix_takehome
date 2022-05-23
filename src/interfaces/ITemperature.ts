export interface ITemperature {
  formula: formulaEnum;
}

type formulaEnum = 'celsuisToFahrenheit' | 'farenheitToCelsuis';
