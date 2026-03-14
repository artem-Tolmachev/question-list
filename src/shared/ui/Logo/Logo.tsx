import { Link } from 'react-router-dom';
import LogoIcon from './LogoIcon';
import LogoText from './LogoText';
import './logo.scss';

export default function Logo() {
  return (
      <Link to="/">
        <div className='logo'>
            <LogoIcon />
            <LogoText />
        </div>
      </Link>
  );
}
