import { headers } from "next/headers";
import { auth } from "../lib/auth";
import AuthButton from "./AuthButton";

const Header = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div>
      <AuthButton />
      {session && <p>Hello {session?.user.name}</p>}
    </div>
  );
};

export default Header;
