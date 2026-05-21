import Link from "next/link";

const AuthForm = ({ formAction }) => {
  return (
    <div className="flex flex-col items-center">
      <form action={formAction}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Register</legend>

          <label className="label">Name</label>
          <input
            type="name"
            name="name"
            className="input"
            placeholder="Name"
            required
          />

          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
            required
          />

          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
            required
          />

          <button className="btn btn-neutral mt-4">Register</button>
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

export default AuthForm;
