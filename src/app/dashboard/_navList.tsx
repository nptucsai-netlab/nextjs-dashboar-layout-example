import { IoHomeOutline } from 'react-icons/io5';

export interface AsideNav {
  name: string;
  Before?: any;
  After?: any;
  href?: string;
}

export const asideNav: AsideNav[] = [
  { name: 'Basic' },
  {
    name: 'Home',
    href: '#',
    Before: IoHomeOutline
  },
  
];
