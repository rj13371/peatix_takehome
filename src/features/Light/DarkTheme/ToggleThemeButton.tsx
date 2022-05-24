import { ThemeContext } from '../../../state/ThemeContext';
import React, { useContext } from 'react';
import { Switch } from 'antd';

const ToggleDarkModeButton = () => {
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
};

export default ToggleDarkModeButton;
