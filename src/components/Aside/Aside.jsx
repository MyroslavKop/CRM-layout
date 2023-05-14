import Menu from './Menu/Menu';
import MobileMenu from './Menu/MobileMenu';

import logo from '../../assets/icons/general.svg';
import avatar from '../../assets/img/avatar.png';

import '../../scss/sections/aside.scss';

const Aside = () => (
  <>
    <header className="desktop">
      <nav className="aside">
        <div className="aside__logo">
          <img src={logo} alt="Dashboard" />
          <h1 className="aside__logo-title">
            Dashboard<span className="aside__logo-version">v.01</span>
          </h1>
        </div>
        <Menu />
        <div className="aside__user">
          <img src={avatar} alt="user avatar" />
          <div className="aside__user-info">
            <div className="aside__user-name">Evano</div>
            <div className="aside__user-role">Project Manager</div>
          </div>
        </div>
      </nav>
    </header>
    <MobileMenu />
  </>
);

export default Aside;
