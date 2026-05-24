import { revalidatePath } from "next/cache";
import { connectDb } from "../lib/mongodb";
import { User } from "../models/User";
import Link from "next/link";

const AdminPage = async () => {
  await connectDb();

  // Get users
  const users = User.find({});

  // Delete a user
  const deleteUserAction = async (formData: FormData) => {
    "use server";
    await connectDb();

    const id = formData.get("id");

    await User.findByIdAndDelete(id);

    revalidatePath("/admin");

    console.log(id);
  };

  return (
    <main>
      <h1>Admin Page</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {(await users).map((user) => {
            return (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <Link href={`/admin/edit/${user._id}`} className="btn">
                    Edit
                  </Link>
                </td>
                <td>
                  <form action={deleteUserAction}>
                    <input type="hidden" name="id" value={user._id} />
                    <button className="btn">Delete</button>
                  </form>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};

export default AdminPage;
