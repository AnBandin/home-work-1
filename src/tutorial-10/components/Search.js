import {useState} from 'react';
import axios from 'axios';

const Search = ({setUser}) => {
  const [search, setSearch] = useState('');
  const [loading, setLoad] = useState(false);

  const getUsers = async (e) => {
    e.preventDefault();
    setLoad(true);
    try {
      const {data} = await axios.get(`https://api.github.com/users/${search}`);
      setUser(data);
    } catch (e) {
      alert('Пользователь не найден');
      console.error(e.message);
    }
    setLoad(false);
  };

  return (
    <form className="app-form" onSubmit={getUsers}>
      <input
        type="text"
        className="app-input"
        placeholder="Укажите GitHub-аккаунт"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        disabled={loading}
        className={
          loading ? 'app-form_btn app-form_btn_disabled' : 'app-form_btn'
        }
      >
        Найти
      </button>
    </form>
  );
};

export default Search;
