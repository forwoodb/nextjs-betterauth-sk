import AuthForm from "@/app/components/AuthForm";
import { connectDb } from "@/app/lib/mongodb";

const LoginPage = () => {
  const loginUserAction = async (formData: FormData) => {
    "use server";
    await connectDb();

    console.log(formData);
  };
  return (
    <>
      <h1>Login Page</h1>
      <AuthForm mode="login" formAction={loginUserAction} />
    </>
  );
};

export default LoginPage;
