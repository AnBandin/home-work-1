import {getDate, getName} from './service';

export const ProfileF = (props) => {
  return (
    <div className="container">
      <p>
        Привет, <b>{getName(props.name)}!</b>
      </p>
      <p className="text_min">Дата регистрации: {getDate(props.registredAt)}</p>
    </div>
  );
};