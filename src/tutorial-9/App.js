import {useState} from 'react';
import axios from "axios";

function App() {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const {data} = await axios.get('https://62544efc19bc53e2347c5576.mockapi.io/users');
        setUsers(data);
    };

    const createUsers = () => {
        axios.post('https://62544efc19bc53e2347c5576.mockapi.io/users', {
            name: 'Andrei B.'
        })
    }

    const loadFile = () => {
        const fileElem = document.querySelector('#file');
        const file = fileElem.files[0];
        console.log(fileElem.files)

        const formData = new FormData();
        formData.append('file', file);

        axios.post('http://localhostl:9999', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
    }

    return (
        <div>
            <ul>
                {users.map((obj) => (
                    <li key={obj.id}>{obj.name}</li>
                ))}
            </ul>
            <button onClick={getUsers}>Получить список пользователей</button>
            <button onClick={createUsers}>Добавит меня</button>
            <br/>
            <br/>
            <br/>
            <br/>
            <input type='file' id='file'/>
            <button onClick={loadFile}>Загрузить</button>
        </div>
    );
}

export default App;
