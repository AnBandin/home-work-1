import './App.css';

const App = () => {
  return (
    <div className="body">
      <div id="app">
        <div className="app-container">
          <form className="app-form">
            <input
              type="text"
              className="app-input"
              placeholder="Укажите GitHub-аккаунт"
            />
            <button className="app-form_btn">Найти</button>
          </form>
          <div className="app-user">
            <div className="app-user_info">
              <div className="app-user_image">
                <img
                  src="https://avatars.githubusercontent.com/u/12086860?v=4"
                  alt=""
                />
              </div>
              <div className="app-user_data">
                <h1 className="app-user_name">
                  Archakov Dennis
                  <span>@archakov06</span>
                </h1>
                <p className="app-user_about">
                  Frontend Developer. UI Designer. JavaScript ❤️ ReactJS ⚛ React
                  Native, NodeJS, PHP
                </p>
              </div>
            </div>
            <ul className="app-user_stats">
              <li className="app-user_stats-item">
                Репозитории
                <span>124</span>
              </li>
              <li className="app-user_stats-item">
                Подписчиков
                <span>1.2к</span>
              </li>
              <li className="app-user_stats-item">
                Звёзд
                <span>506</span>
              </li>
            </ul>
            <ul className="app-user_location">
              <li className="app-user_location-item">
                Russia, Ingushetia, Nazran
              </li>
              <li className="app-user_location-item">
                <a href="http://archakov.im">http://archakov.im</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
