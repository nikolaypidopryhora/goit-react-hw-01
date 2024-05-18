import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profileElem}>
      <div>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.statsList}>
        <li className={css.statItem}>
          <span>Followers</span>
          <span className={css.statNum}>{stats.followers}</span>
        </li>
        <li className={css.statItem}>
          <span>Views</span>
          <span className={css.statNum}>{stats.views}</span>
        </li>
        <li className={css.statItem}>
          <span>Likes</span>
          <span className={css.statNum}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
