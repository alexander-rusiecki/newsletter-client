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
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
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
