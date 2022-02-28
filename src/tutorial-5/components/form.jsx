import {Button, TextField, Typography} from '@material-ui/core';
import React, {useState} from 'react';

export default function Form({urlCreate, urlEdit}) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  const onChangeInput = (event, func) => {
    urlEdit(event);
    func(event.target.value);
  };

  const clean = () => {
    urlCreate();
    setFullName('');
    setEmail('');
    setText('');
  };

  return (
    <>
      <Typography variant="h6">Обратная связь:</Typography>
      <TextField
        id="fullName"
        placeholder="Имя"
        variant="outlined"
        margin="normal"
        fullWidth={true}
        value={fullName}
        onChange={(event) => onChangeInput(event, setFullName)}
      />
      <TextField
        id="email"
        placeholder="Почта"
        variant="outlined"
        margin="normal"
        fullWidth={true}
        value={email}
        onChange={(event) => onChangeInput(event, setEmail)}
      />
      <TextField
        id="text"
        placeholder="Текст"
        variant="outlined"
        margin="normal"
        multiline
        fullWidth={true}
        value={text}
        onChange={(event) => onChangeInput(event, setText)}
      />

      <Button
        onClick={clean}
        type="submit"
        value="Submit"
        variant="contained"
        color="primary"
        fullWidth={true}
      >
        Отправить
      </Button>
    </>
  );
}
