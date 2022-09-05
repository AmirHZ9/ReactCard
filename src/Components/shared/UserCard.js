import React from "react";
import styles from "../../styles/user.module.css";
import avatar from "../../assets/avatar/avatar.png";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
export default function UserCard({ usersData }) {
  const { id, name, information, points, level, awards, matches, pals } =
    usersData;
  return (
      <div className={styles.container}>
    <div className={id == "1" ? styles.userRed : styles.userGreen}>
      <div className={styles.userProfile}>
        <span className={styles.level}>level {level}</span>
        <img src={avatar} title="Teacher" alt="avatar" className={styles.avatar} />
        <span className={styles.points}>{points} points</span>
      </div>
      <div className={styles.information}>
        <h1 className={styles.name}>{name}</h1>
        <div className={styles.details}>
          <div className={styles.detailsGroup}>
            <p>Group Name</p>
            <p>Joined January 2019</p>
          </div>
          <div className={styles.detailsGroup}>
            <p>Position/Role</p>
            <p>City,Coutry</p>
          </div>
        </div>
        <div className={styles.stats}>
          <div>
            <span className={styles.stateTitle}>awards</span>
            <EmojiEventsIcon fontSize="large"/>
            <span className={styles.number}>{awards}</span>
          </div>
          <div>
            <span className={styles.stateTitle}>matches</span>
            <SportsEsportsIcon fontSize="large"/>
            <span className={styles.number}>{matches}</span>
          </div>
          <div>
            <span className={styles.stateTitle}>pals</span>
            <GroupsIcon fontSize="large"/>

            <span className={styles.number}>{pals}</span>
          </div>
          <div>
            <span className={styles.stateTitle}>coffee</span>
            <LocalCafeIcon fontSize="large"/>
            <AllInclusiveIcon fontSize="medium"/>
          </div>
        </div>
      </div>

    </div>
      <div className={styles.desc}>
          <h1 className={styles.name}>{name}</h1>
          <p>{information}</p>
          <span className={styles.more}>Mouse over the card for more info</span>
      </div>
      </div>
  );
}
