import { Card } from './components/CardGroup/Card/Card';
import React from 'react';
import { CardGroup } from './components/CardGroup/CardGroup';

interface Cards {
  imageUrl?: string;
  title?: string;
  createdAt: Date;
  updatedAt: Date;
}

const cardsPlaceholder: Cards[] = [
  // { createdAt: new Date(Date.now() - 110000), updatedAt: new Date(Date.now()) },
  // { createdAt: new Date(Date.now() - 50000), updatedAt: new Date(Date.now() - 3000) },
  {
    createdAt: new Date(Date.now() - 3590000),
    title: 'Erland',
    updatedAt: new Date(Date.now() - 3590000),
    // imageUrl: 'https://v1.tailwindcss.com/img/card-top.jpg',
    imageUrl: 'https://picsum.photos/id/237/200/320',
  },
];

export function App() {
  return (
    <>
      <CardGroup>
        {cardsPlaceholder.map((card, index) => {
          return <Card props={{ ...card, positionInGrid: index }} key={index} />;
        })}
      </CardGroup>
    </>
  );
}
