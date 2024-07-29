import { useState } from "react";
import { registerWithEmailAndPassword } from "../firebase";
import { NavLink, useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await registerWithEmailAndPassword(email, password);
      console.log(user);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col p-4 justify-center items-center">
      <h1 className="text-3xl my-4">Register</h1>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <div className="my-1">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email Address"
            className="mx-2 my-4 p-1 border border-gray-400 rounded-sm"
          />
        </div>
        <div className="my-1">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
            className="mx-2 my-4 p-1 border border-gray-400 rounded-sm"
          />
        </div>
        <button
          className="bg-black text-white p-1 rounded-md m-auto"
          type="submit"
        >
          Register
        </button>
      </form>
      <p className="my-2">
        Already Have an Account?{" "}
        <NavLink to="/login" className="underline">
          Sign In
        </NavLink>
      </p>
    </div>
  );
};

export default Registration;
