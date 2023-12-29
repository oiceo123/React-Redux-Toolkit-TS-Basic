import { Link, useNavigate } from "react-router-dom";
import { signout } from "../store/slices/authSlice";
import { useAppDispatch, useAppSelector } from "../store/store";

function Navbar() {
  const cart = useAppSelector((state) => state.cart);
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSignout = () => {
    dispatch(signout());
    navigate("/");
  };

  return (
    <header className="head">
      <ul className="nav">
        <li className="nav-list">
          <Link to="/">Product</Link>
        </li>
        {user && (
          <li className="nav-list">
            <Link to="/cart">
              Cart{" "}
              <span className="cart-num">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            </Link>
          </li>
        )}
        {user ? (
          <button onClick={handleSignout}>Signout</button>
        ) : (
          <li className="nav-list">
            <Link to="/signin">Sign in</Link>
          </li>
        )}
      </ul>
    </header>
  );
}

export default Navbar;
