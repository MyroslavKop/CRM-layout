import { ReactComponent as Cube } from '../../../assets/icons/menu/cube.svg';
import { ReactComponent as Discount } from '../../../assets/icons/menu/discount.svg';
import { ReactComponent as Help } from '../../../assets/icons/menu/help.svg';
import { ReactComponent as Key } from '../../../assets/icons/menu/key.svg';
import { ReactComponent as Money } from '../../../assets/icons/menu/money.svg';
import { ReactComponent as Profile } from '../../../assets/icons/menu/profile.svg';

const menuData = [
  {
    id: 0,
    text: 'Dashboard',
    icon: <Key />,
    сhevron: false,
  },
  {
    id: 1,
    text: 'Product',
    icon: <Cube />,
    сhevron: true,
  },
  {
    id: 2,
    text: 'Customers',
    icon: <Profile />,
    сhevron: true,
  },
  {
    id: 3,
    text: 'Income',
    icon: <Money />,
    сhevron: true,
  },
  {
    id: 4,
    text: 'Promote',
    icon: <Discount />,
    сhevron: true,
  },
  {
    id: 5,
    text: 'Help',
    icon: <Help />,
    сhevron: true,
  },
];

export default menuData;
