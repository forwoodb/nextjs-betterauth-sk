import { connectDb } from "../lib/mongodb";

const AdminPage = async () => {
  await connectDb();

  return (
    <main>
      <h1>Admin Page</h1>
    </main>
  );
};

export default AdminPage;
