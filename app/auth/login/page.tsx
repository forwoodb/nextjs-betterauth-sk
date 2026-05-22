import AuthForm from "@/app/components/AuthForm";
import { auth } from "@/app/lib/auth";
import { connectDb } from "@/app/lib/mongodb";
import { redirect } from "next/navigation";

type LoginState = {
  message: string | null;
};

const LoginPage = () => {
  const loginUserAction = async (prevState: LoginState, formData: FormData) => {
    "use server";
    await connectDb();

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      await auth.api.signInEmail({
        body: {
          email,
          password,
        },
      });

      return { message: null };
    } catch (error) {
      const err = error as Error;
      console.log(err.message);
      return { message: err.message };
    }

    // redirect("/protected-route");
  };
  return (
    <>
      <h1>Login Page</h1>
      <AuthForm mode="login" formAction={loginUserAction} />
    </>
  );
};

export default LoginPage;
