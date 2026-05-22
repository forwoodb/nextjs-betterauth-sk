import AuthForm from "@/app/components/AuthForm";
import { auth } from "@/app/lib/auth";
import { connectDb } from "@/app/lib/mongodb";
import { redirect } from "next/navigation";

const LoginPage = () => {
  const loginUserAction = async (formData: FormData) => {
    "use server";
    await connectDb();

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });

    redirect("/protected-route");
  };
  return (
    <>
      <h1>Login Page</h1>
      <AuthForm mode="login" formAction={loginUserAction} />
    </>
  );
};

export default LoginPage;
