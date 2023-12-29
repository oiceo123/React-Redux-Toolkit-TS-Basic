import { useState } from "react";
import { signinAsync } from "../store/slices/authSlice";
import { useAppDispatch, useAppSelector } from "../store/store";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.auth);

  const handleSignin = () => {
    dispatch(signinAsync({ email, password }));
  };

  return (
    <div className="form">
      <label>Email</label>
      <input
        type="text"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Password</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignin}>
        {loading ? "Loading..." : "Submit"}
      </button>
      {error && (
        <p style={{ color: "red", fontSize: "16px", textAlign: "left" }}>
          {error}
        </p>
      )}
    </div>
  );
}

export default Signin;
