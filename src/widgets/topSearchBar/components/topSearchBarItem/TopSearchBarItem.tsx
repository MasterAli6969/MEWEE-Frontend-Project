import React, { useState } from "react";
import { useThemeStore } from "../../../../entities";
import "./top_search_bar_item.css";

interface TopSearchBarItemProps {
  onClick: () => void;
  icon: React.ReactNode;
}

export const TopSearchBarItem: React.FC<TopSearchBarItemProps> = ({ onClick, icon }) => {
  const { currentTheme } = useThemeStore();
  const [hoverIconColor, setHoverIconColor] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const iconStyle = {
    color: isActive
      ? currentTheme?.mainPage.header.activeIcon
      : currentTheme?.mainPage.header.icon,
    opacity: hoverIconColor ? currentTheme?.mainPage.header.hoverIcon : "1",
  };

  return (
    <div
      className="icon-search-bar-container"
      style={iconStyle}
      onMouseEnter={() => setHoverIconColor(true)}
      onMouseLeave={() => {
        setHoverIconColor(false);
        setIsActive(false);
      }}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      onClick={onClick}
    >
      {icon}
    </div>
  );
};
