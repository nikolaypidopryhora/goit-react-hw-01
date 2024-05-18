import css from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  const onlineStatusClass = clsx(
    css.onlineStatus,
    isOnline ? css.online : css.offline
  );

  return (
    <div className={css.container}>
      <img className={css.imgAvatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={onlineStatusClass}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
