import { Link } from "react-router-dom";
import { useState } from "react";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-full flex justify-center my-8">
      <div className="w-full max-w-5xl flex items-center justify-center flex-col">
        <h2 className="text-2xl">Zaloguj się</h2>
        <form
          action="#"
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="flex flex-col w-full items-center gap-4"
        >
          <input
            placeholder="Email"
            type="email"
            className={`w-full focus:outline-0 border-b-2 border-gray-400 py-3 ${
              email.length > 3
                ? email.includes("@")
                  ? "border-green-500"
                  : "border-red-500"
                : ""
            }`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            className={`w-full focus:outline-0 border-b-2 py-3 ${
              password ? "border-green-500" : "border-gray-400"
            }`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-sm w-fit hover:cursor-pointer"
          >
            Zaloguj
          </button>
        </form>
        <Link to={"/"}>
          <p className="py-3 text-blue-500">Nie pamiętasz hasła?</p>
        </Link>
      </div>
    </div>
  );
}

export default Login;
