import { Link } from 'react-router-dom';
import AuthButtons from '@/features/auth/AuthButtons/AuthButtons';
import Logo from '@/shared/ui/Logo/Logo';
import './header.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__right">
          <Logo />
          <nav className="header__nav">
            <ul className="header__links">
              <li>
                <Link className="header__link" to="/">
                  База вопросов
                </Link>
              </li>
              <li>
                <Link className="header__link" to="/quiz">
                  Тренажёр
                </Link>
              </li>
              <li>
                <Link className="header__link" to="/materials">
                  Материалы
                </Link>
              </li>
              <li>
                <Link className="header__link" to="/skills">
                  Навыки (hh)
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <AuthButtons />
      </div>
    </header>
  );
}
