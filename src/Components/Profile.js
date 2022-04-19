import React from "react";
import { useAuth } from "../Providers/Auth";

const Profile = () => {
  const { user } = useAuth();
  return (
    <div>
      <hr />
      Profile Page
      <section>
        {user.name ? <h2>Welcome, {user.name}!</h2> : <h2>Please SignIn</h2>}
      </section>
    </div>
  );
};

export default Profile;
