import { NavLink } from 'react-router-dom';
import { nav, navItem } from './Navigation.css.ts';

const navigations = [
  {
    to: '/',
    label: '홈',
    activeIcon: 'public/icons/Bottom-bar-Address-off.jpg',
    inactiveIcon: '/icons/HomePage-off.png',
  },
  {
    to: '/like',
    label: '즐겨찾기',
    activeIcon: '/icons/Star-on.png',
    inactiveIcon: '/icons/Star-off.png',
  },
  {
    to: '/chat',
    label: '채팅',
    activeIcon: '/icons/Chat-on.png',
    inactiveIcon: '/icons/Chat-off.png',
  },
  {
    to: '/profile',
    label: '마이페이지',
    activeIcon: '/icons/People-on.png',
    inactiveIcon: '/icons/People-off.png',
  },
];

const Navigation = () => {
  return (
    <nav className={nav}>
      {navigations.map((navigation) => (
        <NavLink
          key={navigation.to}
          to={navigation.to}
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          {({ isActive }) => (
            <div className={navItem}>
              <img
                src={isActive ? navigation.activeIcon : navigation.inactiveIcon}
                alt={navigation.label}
              />
              <span>{navigation.label}</span>
            </div>
          )}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;
