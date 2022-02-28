import {List, Typography} from '@material-ui/core';

import './App.css';

import React, {useEffect, useState} from 'react';
import Reviews from './components/reviews/reviews';
import {options} from './components/data';
import Form from './components/form';

export default function App() {
  const obj = {};

  const [comments, setComments] = useState(
    JSON.parse(localStorage.getItem('comments')) || []
  );

  const editObject = (event) => {
    obj[event.target.id] = event.target.value;
  };

  const createObject = () => {
    obj.createdAt = new Date()
      .toLocaleString('en-US', options)
      .replaceAll(',', '');
    setComments((prevState) => [...prevState, obj]);
  };

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  return (
    <div className="wrapper">
      <div className="reviews">
        <List>
          <Typography>Отзывы:</Typography>
          {comments.map((value, index) => (
            <Reviews
              review={value}
              index={index}
              urlEdit={setComments}
              key={`${value.fullName}__${value.createdAt}`}
            />
          ))}
        </List>
      </div>
      <div className="reviews">
        <Form urlCreate={createObject} urlEdit={editObject} />
      </div>
    </div>
  );
}
