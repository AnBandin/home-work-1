import React from 'react';
import {Card, Col, Row} from 'react-bootstrap';

export const posts = [
  {
    id: 1,
    imageUrl:
      'https://images.unsplash.com/photo-1635604392842-69afcee9e0ad?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=250&ixid=MnwxfDB8MXxyYW5kb218MHx8Mnx8fHx8fDE2NDQzNjQ0MDU&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=460',
    title: 'Статья 1',
    text: 'С другой стороны сложившаяся структура организации способствует подготовки и реализации соответствующий условий активизации. Задача организации, в особенности же постоянное информационно-пропагандистское.',
  },
  {
    id: 2,
    imageUrl:
      'https://images.unsplash.com/photo-1563257369-25d9a0367daf?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=250&ixid=MnwxfDB8MXxyYW5kb218MHx8Mnx8fHx8fDE2NDQzNjQ0MjY&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=460',
    title: 'Это вторая статья',
    text: 'Идейные соображения высшего порядка, а также реализация намеченных плановых заданий позволяет выполнять важные задания по разработке системы обучения кадров, соответствует насущным потребностям. Равным образом сложившаяся структура организации играет важную роль в формировании существенных финансовых и административных условий.',
  },
  {
    id: 3,
    imageUrl:
      'https://images.unsplash.com/photo-1562890216-35a12862e560?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=250&ixid=MnwxfDB8MXxyYW5kb218MHx8Mnx8fHx8fDE2NDQzNjQ0MzU&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=460',
    title: 'Статья 3',
    text: 'авным образом новая модель организационной деятельности требуют определения и уточнения модели развития. Не следует, однако забывать, что новая модель организационной деятельности играет важную роль в формировании новых предложений.',
  },
  {
    id: 4,
    imageUrl:
      'https://images.unsplash.com/photo-1561319203-ddecbd810115?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=250&ixid=MnwxfDB8MXxyYW5kb218MHx8MXx8fHx8fDE2NDQzNjQ0NDU&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=460',
    title: 'Четвёртая',
    text: 'Разнообразный и богатый опыт сложившаяся структура организации позволяет оценить значение модели развития. Разнообразный и богатый опыт начало повседневной работы по формированию позиции представляет собой интересный эксперимент проверки дальнейших направлений развития.',
  },
];

export const Home = () => {
  return (
    <Row xs={1} md={2} className="g-4">
      {posts.map((obj) => (
        <Col key={obj.id}>
          <Card>
            <Card.Img variant="top" src={obj.imageUrl} />
            <Card.Body>
              <a href={'/post/' + obj.id}>
                <Card.Title>{obj.title}</Card.Title>
              </a>
              <Card.Text>{obj.text.substr(0, 100)} ...</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
