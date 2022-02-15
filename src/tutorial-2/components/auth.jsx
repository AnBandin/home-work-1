import './auth.css';

export default function Auth() {
  let email = '';
  let password = '';

  function onChangeInput(event) {
    event.target.type === 'text'
      ? (email = event.target.value)
      : (password = event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    email.trim() && password.trim()
      ? console.log({email, password})
      : alert('Почему поля пустые, а?!');
    email = password = '';
    event.target.reset();
  }

  return (
    <form className="wrapper" onSubmit={handleSubmit}>
      <input type="text" placeholder="E-mail" onChange={onChangeInput} />
      <input type="password" placeholder="Пароль" onChange={onChangeInput} />
      <button type={'submit'}>Войти</button>
    </form>
  );
}
