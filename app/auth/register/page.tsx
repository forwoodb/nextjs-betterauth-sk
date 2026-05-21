import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="flex flex-col items-center">
      <h2>Register</h2>
      <form action="">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Login</legend>

          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />

          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />

          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
      <p>
        Already have an account?{" "}
        <Link
          href={`/auth/login`}
          className="h-4 border-b border-blue-800 text-blue-800"
        >
          Log In
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
