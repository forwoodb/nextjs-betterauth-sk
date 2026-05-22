import { headers } from "next/headers";
import { auth } from "../lib/auth";
import Link from "next/link";

const Header = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  console.log(session);

  return (
    <div>
      {session ? (
        <button className="btn">Log Out</button>
      ) : (
        <Link href={"/auth/login"} className="btn">
          Log In/Register
        </Link>
      )}
    </div>
  );
};

export default Header;
