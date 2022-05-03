import {useEffect, useState} from 'react';
import axios from 'axios';
import debounce from '../func';
import useDebounce from '../func';

const Search = ({setUser}) => {
  const [search, setSearch] = useState('');
  const [loading, setLoad] = useState(false);
  const debouncedInputValue = useDebounce(search, 500);

  useEffect(() => {
    if (debouncedInputValue) {
      getUsers();
    }
  }, [debouncedInputValue]);

  useEffect(() => {
    const {search} = window.location;
    if (search.length) {
      const user = search.split('=')[1];
      getUsers(user);
      setSearch(user);
    }
  }, []);

  const getUsers = async (user = undefined) => {
    try {
      const {data} = await axios.get(
        `https://api.github.com/users/${user || search}`
      );
      setUser(data);
    } catch (e) {
      setUser({});
      console.error(e.message);
    }
  };

  const getForm = (e) => {
    e.preventDefault();
    setLoad(true);
    getUsers();
    setLoad(false);
  };

  return (
    <form className="app-form" onSubmit={getForm}>
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
