import { headers } from "next/headers";
import { auth } from "../lib/auth";
import { redirect } from "next/navigation";

const ProtectedPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/auth/login");
  }

  console.log(session);

  return (
    <>
      <h1>Protected Dashboard Page</h1>
      <p>Hello {session?.user.name}</p>
    </>
  );
};

export default ProtectedPage;
