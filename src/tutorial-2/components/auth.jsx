import './auth.css';

export default function Auth() {
  let email = '';
  let password = '';

  function onChangeInput(event) {
    if (event.target.type === 'text') {
      email = event.target.value;
    } else {
      password = event.target.value;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (email.trim() && password.trim()) {
      console.log({email, password});
      email = password = '';
      event.target.reset();
    } else {
      alert('Почему поля пустые, а?!');
    }
  }

  return (
    <form className="wrapper" onSubmit={handleSubmit}>
      <input type="text" placeholder="E-mail" onChange={onChangeInput} />
      <input type="password" placeholder="Пароль" onChange={onChangeInput} />
      <button type={'submit'}>Войти</button>
    </form>
  );
}
