import { auth } from "@/app/lib/auth";
import { connectDb } from "@/app/lib/mongodb";
import Link from "next/link";
import { redirect } from "next/navigation";

const RegisterPage = () => {
  const createUserAction = async (formData: FormData) => {
    "use server";
    await connectDb();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    console.log(name, email, password);

    await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
      },
    });

    // console.log(response);

    redirect("/protected-route");
  };

  return (
    <div className="flex flex-col items-center">
      <h1>Register Page</h1>
      <form action={createUserAction}>
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

export default RegisterPage;
