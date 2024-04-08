import { HiXMark, HiOutlineBars3 } from 'react-icons/hi2';

interface Props {
  toggle: () => void;
  on: boolean;
}

export default function Nav(props: Props) {
  const { toggle, on } = props;

  return (
    <nav className="navbar bg-primary fixed">
      <div className="navbar-start">
        <label
          id="sidebar-trigger"
          className="btn btn-primary btn-circle text-2xl swap swap-rotate"
        >
          <input type="checkbox" onChange={toggle} checked={on} />
          <HiOutlineBars3 className="swap-off" />
          <HiXMark className="swap-on" />
        </label>
        <span className="btn btn-primary text-xl">Dashboard</span>
      </div>
      <div className="navbar-center"></div>
      <div className="navbar-end"></div>
    </nav>
  );
}
