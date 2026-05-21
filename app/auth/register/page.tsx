import AuthForm from "@/app/components/AuthForm";
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
    <>
      <h1>Register Page</h1>
      <AuthForm formAction={createUserAction} />
    </>
  );
};

export default RegisterPage;
