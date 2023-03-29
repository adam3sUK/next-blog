import { useEffect, useState } from "react";
import DarkTheme from "./DarkTheme";

const ThemeSwtich = () => {

  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    false
  );

  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      const value = localStorage.getItem('darkMode');
      return (value !== null) && setIsDarkMode(JSON.parse(value));
    }
  }, [])

  const onClickHandler = () => {
    localStorage.setItem('darkMode', JSON.stringify(!isDarkMode));
    setIsDarkMode(prevValue => !prevValue);
  }

  const text = isDarkMode ? 'Light Mode' : 'Dark Mode';

  return (
    <>
    <button onClick={onClickHandler}>
      {text}
    </button>
    <style jsx>{`
      button {
        background: none;
        border: none;
        cursor: pointer;
        color: white;
        background: var(--link-color);
        padding: 10px 6px;
        transition: 0.4s linear all 0s;
      }

      button:hover {
        filter: brightness(1.05) saturate(115%);
      }
    `}</style>
    {isDarkMode && <DarkTheme />}
    </>
  )
}

export default ThemeSwtich;