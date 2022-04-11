import {useState} from 'react';

function App() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(
      'https://62544efc19bc53e2347c5576.mockapi.io/users'
    );

    if (response.ok) {
      return setUsers(await response.json());
    }
    console.error(`Ошибка сервера ${response.status}`);
    setUsers([]);
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
