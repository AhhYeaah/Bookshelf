import React from 'react';
import { CardTimerGroup } from './CardTimerGroup/CardTimerGroup';
import './Card.css';

interface CardProps {
  props: {
    title?: string;
    subtitle: string;
    imageUrl?: string;
    createdAt: Date;
    updatedAt: Date;
    positionInGrid: number;
  };
}

export function Card({
  props: { createdAt, title = 'placeholder', imageUrl, updatedAt, positionInGrid, subtitle },
}: CardProps): JSX.Element {
  return (
    <section className="card-container group ">
      {/* img div */}
      <div className="card-image-container">
        <div className="black-filter"></div>
        <img
          className="card-image"
          src={imageUrl}
          alt={`Imagem para o ${positionInGrid + 1}º card, de titulo: ${title}`}
        />
      </div>
      {/* card body */}
      <section className="card-body group-hover:h-auto">
        <div className="title-container">
          <h1 className="title">{title}</h1>
          <h2 className="subtitle">{subtitle}</h2>
        </div>
        <section className="description-container">
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
            eaque, exercitationem praesentium nihil.aaaaaaaaaaaaaaaa a aa a
          </p>
        </section>
      </section>
      {/* card footer */}
      <section className="card-footer">
        <CardTimerGroup createdAt={createdAt} updatedAt={updatedAt} />
      </section>
    </section>
  );
}
