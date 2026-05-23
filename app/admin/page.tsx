import { connectDb } from "../lib/mongodb";
import { User } from "../models/User";

const AdminPage = async () => {
  await connectDb();

  const users = User.find({});

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
                  <button className="btn">Edit</button>
                </td>
                <td>
                  <button className="btn">Delete</button>
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
