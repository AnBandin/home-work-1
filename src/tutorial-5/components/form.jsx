import {Button, TextField, Typography} from '@material-ui/core';
import React from 'react';

export default function Form({urlCreate, urlEdit}) {
  return (
    <form onSubmit={urlCreate}>
      <Typography variant="h6">Обратная связь:</Typography>
      <TextField
        id="fullName"
        placeholder="Имя"
        variant="outlined"
        margin="normal"
        fullWidth={true}
        onChange={urlEdit}
      />
      <TextField
        id="email"
        placeholder="Почта"
        variant="outlined"
        margin="normal"
        fullWidth={true}
        onChange={urlEdit}
      />
      <TextField
        id="text"
        placeholder="Текст"
        variant="outlined"
        margin="normal"
        multiline
        fullWidth={true}
        onChange={urlEdit}
      />

      <Button
        type="submit"
        value="Submit"
        variant="contained"
        color="primary"
        fullWidth={true}
      >
        Отправить
      </Button>
    </form>
  );
}
