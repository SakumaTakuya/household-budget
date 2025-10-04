import './Navigation.css';
import { Home, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const navItems = [
    { path: "/", label: "ホーム", icon: Home },
    { path: "/settings", label: "設定", icon: Settings }
  ];

  const getNavLinkClass = ({ isActive }) => {
    return isActive
      ? "nav-item-base active" // アクティブな場合
      : "nav-item-base";             // 非アクティブな場合
  };

  return (
    <nav className="bottom-nav">
      {navItems.map(item => (
        <NavLink
          to={item.path}
          key={item.path}
          className={getNavLinkClass}
        >
          <item.icon size={24} />
          <div>{item.label}</div>
        </NavLink>
      ))}
    </nav>
  )
}

export default Navigation