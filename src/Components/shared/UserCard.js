import React from "react";
import styles from "../../styles/user.module.css";
import avatar from "../../assets/avatar/avatar.png";

export default function UserCard({ usersData }) {
  const { id,name, information, points, level, awards, matches, pals } = usersData;
  return (
    <div className={id== "1" ? styles.userRed : styles.userGreen}>
      <div className={styles.userProfile}>
        <span className={styles.level}>level {level}</span>
        <img src={avatar} alt="avatar" className={styles.avatar} />
        <span className={styles.points}>{points} points</span>
      </div>
      <div className={styles.information}>
        <p className={styles.name}>{name}</p>
        <div className={styles.details}>
          <div>
            <p>Group Name</p>
            <p>City,Coutry</p>
          </div>
          <div>
            <p>Joined January 2019</p>
            <p>Position/Role</p>
          </div>

        </div>
        <div className={styles.awards}>
            <div>
                <span>awards</span>
              
                <span>{awards}</span>
            </div>
            <div>
                <span>matches</span>
                <img src="" alt="" />
                <span>{matches}</span>
            </div>
            <div>
                <span>pals</span>
                <img src="" alt="" />
                <span>{pals}</span>
            </div>
            <div>
                <span>coffee</span>
                <img src="" alt="" />
                <span></span>
            </div>
        </div>
      </div>
    </div>
  );
}
