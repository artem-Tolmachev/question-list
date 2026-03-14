import { Link } from "react-router-dom";
import './authButtons.scss';

export default function AuthButtons() {

  return (
    <div className='auth-buttons'>
      <Link className='auth-buttons__login' to="#">Вход</Link>
      <Link className='auth-buttons__register' to="#">Регистрация</Link>
    </div>
  );
}
