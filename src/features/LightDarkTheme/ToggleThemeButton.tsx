import { ThemeContext } from '../../state/ThemeContext';
import React, { useContext, ReactElement } from 'react';
import { Switch } from 'antd';

//A switch that when clicked by the user will change the css background and text color of the app to black and white or vice versa
//Params: none
//Returns: a Switch toggle

export default function ToggleThemeButton(): ReactElement {
  const { toggleDark } = useContext(ThemeContext);
  const handleOnClick = (checked: boolean, event: MouseEvent) => {
    event.preventDefault();
    toggleDark?.();
  };
  return (
    <>
      <Switch
        defaultChecked
        onChange={handleOnClick}
        checkedChildren="🌙"
        unCheckedChildren="🌞"
      />
    </>
  );
}
