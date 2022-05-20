import { ThemeContext } from '../context/ThemeContext';
import React, { ReactElement, useContext } from 'react';
import { Switch } from 'antd';

export const ToggleDarkMode = () => {
  const { dark, toggleDark } = useContext(ThemeContext);
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
};
