const Card = ({user}) => {
  return (
    <div className="app-user">
      <div className="app-user_info">
        <div className="app-user_image">
          <img src={user.avatar_url} alt="" />
        </div>
        <div className="app-user_data">
          <h1 className="app-user_name">
            {user.name}
            <span>{`@${user.login.toLowerCase()}`}</span>
          </h1>
          <p className="app-user_about">{user.bio}</p>
        </div>
      </div>
      <ul className="app-user_stats">
        <li className="app-user_stats-item">
          Репозитории
          <span>{user.public_repos}</span>
        </li>
        <li className="app-user_stats-item">
          Подписчиков
          <span>{Math.round(user.followers / 100) / 10}к</span>
        </li>
        <li className="app-user_stats-item">
          Подписан
          <span>{user.following}</span>
        </li>
      </ul>
      <ul className="app-user_location">
        <li className="app-user_location-item">{user.location}</li>
        <li className="app-user_location-item">
          <a href="http://archakov.im">{user.blog}</a>
        </li>
      </ul>
    </div>
  );
};

export default Card;
