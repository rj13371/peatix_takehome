import { ThemeContext } from '../../state/ThemeContext';
import React, { useContext, ReactElement } from 'react';
import { Switch } from 'antd';

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
