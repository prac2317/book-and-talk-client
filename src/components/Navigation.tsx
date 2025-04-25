import { NavLink, useLocation } from 'react-router-dom';
import { nav, navItem } from './Navigation.css.ts';
import images from '@assets/icons/images.ts';

const navigations = [
  {
    to: '/',
    label: '홈',
    activeIcon: images.bottomBarHomeOn,
    inactiveIcon: images.bottomBarHomeOff,
  },
  {
    to: '/favorites',
    label: '즐겨찾기',
    activeIcon: images.bottomBarFavoriteOn,
    inactiveIcon: images.bottomBarFavoriteOff,
  },
  {
    to: '/chat',
    label: '채팅',
    activeIcon: images.bottomBarChatOn,
    inactiveIcon: images.bottomBarChatOff,
  },
  {
    to: '/profile',
    label: '마이페이지',
    activeIcon: images.bottomBarProfileOn,
    inactiveIcon: images.bottomBarProfileOff,
  },
];

const Navigation = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <nav className={nav}>
      {navigations.map((navigation) => (
        <NavLink
          key={navigation.to}
          to={navigation.to}
          // todo: navbar 활성화 방식 변경하기  
          className={({ isActive}) =>
            isActive || (pathname.startsWith('/clubs') || pathname.startsWith('/books')) && navigation.to === '/' ? 'active' : 'inactive'
          }
        >
          {({ isActive }) => (
            <div className={navItem}>
              <img
                // todo: navbar 활성화 방식 변경하기  
                src={isActive || (pathname.startsWith('/clubs') || pathname.startsWith('/books')) && navigation.to === '/' ? navigation.activeIcon : navigation.inactiveIcon}
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
