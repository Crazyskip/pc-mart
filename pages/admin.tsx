import type { NextPage } from "next";
import { useSession } from "next-auth/react";

const Admin: NextPage = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (session && session.user.role === "ADMIN") {
    return (
      <div>
        <h1>Admin</h1>
        <p>Welcome to the Admin Portal!</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>You are not authorized to view this page!</h1>
      </div>
    );
  }
};

export default Admin;
