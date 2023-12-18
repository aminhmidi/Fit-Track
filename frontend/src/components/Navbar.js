import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Fit Track</h1>
        </Link>
        <nav>
          {user && (
            <div>
              <span>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {!user && (
            <div>
              <a href="/login">
                {" "}
                <button>Login</button>
              </a>
              <a href="/signup">
                {" "}
                <button>Sign Up</button>
              </a>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
