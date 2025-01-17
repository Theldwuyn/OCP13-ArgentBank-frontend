import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { loginUser } from '../features/auth/authSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

// style
import '../style/pages/signIn.scss';
import { useNavigate } from 'react-router';

function SignIn() {
  const usernameLocalStorage = localStorage.getItem('username') || '';
  const [usernameValue, setUsernameValue] = useState(usernameLocalStorage);
  const { isLoading, error, isAuthenticated } = useSelector(
    (state) => state.auth,
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;
    dispatch(loginUser({ email, password }));

    if (e.currentTarget.remember.checked) {
      localStorage.setItem('username', email);
    }
  }

  if (isAuthenticated) {
    navigate('/dashboard');
  }

  function handleUsernameValue(text) {
    setUsernameValue(text);
  }

  return (
    <main className="main bg-dark">
      <section className="signInSection">
        <FontAwesomeIcon icon={faCircleUser} />
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Username</label>
            <input
              type="email"
              name="email"
              id="email"
              value={usernameValue}
              onChange={(e) => handleUsernameValue(e.target.value)}
              required
            />
          </div>
          <div className="input-wrapper">
            <label>Password</label>
            <input type="password" name="password" id="password" required />
          </div>
          <div className="input">
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <button type="submit" disabled={isLoading} className="signInButton">
            Sign In
          </button>
          {error && <p className="error-message">{error}</p>}
        </form>
      </section>
    </main>
  );
}

export default SignIn;
