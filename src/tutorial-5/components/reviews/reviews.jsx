import {
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@material-ui/core';
import React from 'react';
import styles from './Reviews.module.css';

function Reviews({review, urlEdit, index}) {
  const parserDate = (date) => {
    return new Date(Date.parse(date)).toLocaleString('ru-Ru');
  };

  const delComment = () => {
    urlEdit((prev) => prev.filter((item, id) => id !== index));
  };

  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar>X</Avatar>
        </ListItemAvatar>
        <div className={styles.information}>
          <ListItemText
            primary={review.fullName}
            secondary={<React.Fragment>{review.text}</React.Fragment>}
          />
          <button onClick={delComment}>x</button>
        </div>
      </ListItem>
      <Divider variant="inset" component="li" />
      <div className={styles.date}>
        <p>{parserDate(review.createdAt)}</p>
      </div>
    </>
  );
}

export default Reviews;
