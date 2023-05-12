import React, {useContext} from "react";
import GlobalState from "../state/GlobalState";

const Profile = () => {
  const {state} = useContext(GlobalState)
  return (
    <section>
      <h1>Welcome, {state.username}</h1>
    </section>
  );
};

export default Profile;
