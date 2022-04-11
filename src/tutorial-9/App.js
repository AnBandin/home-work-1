import {useState} from 'react';

function App() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await fetch(
        'https://62544efc19bc53e2347c5576.mockapi.io/user'
      );

      if (!response.ok) {
        throw `Ошибка сервера ${response.status}`;
      }

      setUsers(await response.json());
    } catch (err) {
      console.error(err);
      setUsers([]);
    }
  };

  return (
    <div>
      <ul>
        {users.map((obj) => (
          <li key={obj.id}>{obj.name}</li>
        ))}
      </ul>
      <button onClick={getUsers}>Получить список пользователей</button>
    </div>
  );
}

export default App;
