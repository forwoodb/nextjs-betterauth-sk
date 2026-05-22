import Link from "next/link";

interface AuthFormTypes {
  mode: string;
  formAction: (formData: FormData) => Promise<void>;
}

const AuthForm = ({ mode, formAction }: AuthFormTypes) => {
  return (
    <div className="flex flex-col items-center">
      <form action={formAction}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">
            {mode === "login" ? "Log In" : `Register`}
          </legend>

          {mode === "register" && (
            <>
              <label className="label">Name</label>
              <input
                type="name"
                name="name"
                className="input"
                placeholder="Name"
                required
              />
            </>
          )}

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

          <button className="btn btn-neutral mt-4">
            {mode === "login" ? "Log In" : "Register"}
          </button>
        </fieldset>
      </form>
      <p>
        {mode === "login" ? `Don't` : `Already`} have an account?{" "}
        {mode === "login" ? (
          <Link
            href={`/auth/register`}
            className="h-4 border-b border-blue-800 text-blue-800"
          >
            Register
          </Link>
        ) : (
          <Link
            href={`/auth/login`}
            className="h-4 border-b border-blue-800 text-blue-800"
          >
            Log In
          </Link>
        )}
      </p>
    </div>
  );
};

export default AuthForm;
