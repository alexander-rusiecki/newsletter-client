import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <div className="auth-links">
              <li>
                <Link to="https://alexander-rusiecki.github.io/newsletter-client/login">
                  Login
                </Link>
              </li>
              <li>
                <Link to="https://alexander-rusiecki.github.io/newsletter-client/signup">
                  Signup
                </Link>
              </li>
              <li>
                <Link to="https://alexander-rusiecki.github.io/newsletter-client/logout">
                  Logout
                </Link>
              </li>
              <li>
                <Link to="https://alexander-rusiecki.github.io/newsletter-client/dashboard/">
                  Dashboard
                </Link>
              </li>
            </div>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default Layout;
