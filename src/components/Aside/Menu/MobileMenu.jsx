import { useState, useRef, useEffect } from 'react';
import Hamburger from 'hamburger-react';

import useOnClickOutside from '../../../hooks/useOnClickOutside';

import avatar from '../../../assets/img/avatar.png';

import menuData from './menuData';

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const ref = useRef();

  useOnClickOutside(ref, () => setOpen(false));

  useEffect(() => {
    if (open) {
      document.body.classList.add('body__active');
    } else {
      document.body.classList.remove('body__active');
    }
  }, [open]);

  return (
    <header className="mobile" ref={ref}>
      <div className="hamburger">
        <Hamburger toggled={open} toggle={setOpen} color="#00bd95" size={30} />
      </div>
      <nav>
        <ul className={open ? 'aside__menu-mobile aside__menu-mobile-active' : 'aside__menu-mobile'}>
          {menuData.map(({ id, text }) => {
            return (
              <li key={id} className={`aside__menu-mobile-item `}>
                <span className="aside__menu-mobile-text">{text}</span>
              </li>
            );
          })}
          <li className="aside__menu-mobile-item">
            <img src={avatar} alt="user avatar" />
            <div className="aside__user-info">
              <div className="aside__user-name">Evano</div>
              <div className="aside__user-role">Project Manager</div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MobileMenu;
