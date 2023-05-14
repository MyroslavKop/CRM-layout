import { ReactComponent as ChevronIcon } from '../../../assets/icons/menu/chevron.svg';

import menuData from './menuData';

const Menu = () => (
  <ul className="aside__menu">
    {menuData.map(({ id, text, icon, сhevron }) => {
      return (
        <li key={id} className={`aside__menu-item `}>
          <div className="aside__menu-content">
            {icon}
            <span className="aside__menu-text">{text}</span>
          </div>
          {сhevron && <ChevronIcon />}
        </li>
      );
    })}
  </ul>
);

export default Menu;
