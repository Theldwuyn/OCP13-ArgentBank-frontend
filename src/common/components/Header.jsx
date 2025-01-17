import { useDispatch, useSelector } from 'react-redux';
// import { isUserAuthentified, selectFirstName } from '../selector';
import argentBankLogo from '../../assets/argentBankLogo.png';
import { NavLink } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

// style
import '../../style/common/header.scss';
import { logoutUser } from '../../features/auth/authSlice';

function Header() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  //const firstName = useSelector(selectFirstName);
  const firstName = 'John';
  const dispatch = useDispatch();

  if (isAuthenticated) {
    return (
      <header className="appbar">
        <h1 className="sr-only">Argent Bank</h1>
        <NavLink to="/">
          <img
            src={argentBankLogo}
            alt="argent bank"
            className="appbar__logo"
          />
        </NavLink>
        <nav className="appbar__nav">
          <NavLink to="/dashboard" className="appbar__nav--link">
            <FontAwesomeIcon icon={faCircleUser} /> {firstName}
          </NavLink>
          <NavLink
            to="/"
            className="appbar__nav--link"
            onClick={dispatch(logoutUser)}
          >
            <FontAwesomeIcon icon={faRightFromBracket} /> Sign Out
          </NavLink>
        </nav>
      </header>
    );
  }

  return (
    <header className="appbar">
      <h1 className="sr-only">Argent Bank</h1>
      <NavLink to="/">
        <img src={argentBankLogo} alt="argent bank" className="appbar__logo" />
      </NavLink>
      <nav className="appbar__nav">
        <NavLink to="/login" className="appbar__nav--link">
          <FontAwesomeIcon icon={faCircleUser} /> Sign In
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
