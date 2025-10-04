import './Navigation.css';
import { Home, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const navItems = [
    { path: "/", label: "ホーム", icon: Home },
    { path: "/settings", label: "設定", icon: Settings }
  ];


  return (
    <nav>
      {navItems.map(item => (
        <NavLink to={item.path} key={item.path}>
          {item.icon}
          <div>{item.label}</div>
        </NavLink>
      ))}
    </nav>
  )
}

export default Navigation