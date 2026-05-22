"use client";
import Link from "next/link";
import { useActionState } from "react";

type LoginState = {
  message: string | null;
};
interface AuthFormTypes {
  mode: string;
  formAction: (
    prevState: LoginState,
    formData: FormData,
  ) => Promise<LoginState>;
}

const AuthForm = ({ mode, formAction }: AuthFormTypes) => {
  const [state, action] = useActionState(formAction, { message: null });
  return (
    <div className="flex flex-col items-center">
      {state?.message && <p>{state.message}</p>}
      <form action={action}>
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
