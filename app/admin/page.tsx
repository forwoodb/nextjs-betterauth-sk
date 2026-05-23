import { connectDb } from "../lib/mongodb";
import { User } from "../models/User";

const AdminPage = async () => {
  await connectDb();

  const users = User.find({});

  return (
    <main>
      <h1>Admin Page</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {(await users).map((user) => {
            return (
              <tr key={user._id}>
                <td>{user.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};

export default AdminPage;
