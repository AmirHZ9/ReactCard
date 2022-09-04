import React from "react";
import users from "../UserObject/users";
import UserCard from "./shared/UserCard";

// styles
import styles from "../styles/users.module.css"

export default function Users() {
  return (
    <div className={styles.users}>
      {users.map((user) => (
        <UserCard key={user.id} usersData={user} />
      ))}
    </div>
  );
}
