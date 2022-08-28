import React from 'react';
import { CardTimerGroup } from './CardTimerGroup/CardTimerGroup';
import './Card.css';

interface CardProps {
  props: {
    imageUrl?: string;
    title?: string;
    createdAt: Date;
    updatedAt: Date;
    positionInGrid: number;
  };
}

export function Card({
  props: { createdAt, title = 'placeholder', imageUrl, updatedAt, positionInGrid },
}: CardProps): JSX.Element {
  return (
    <section className="structure animation animation-hover divide-y divide-slate-200 border-2 border-slate-600">
      {/* img div */}
      <div className="h-48 m-0 w-full">
        <img
          className="w-full h-full object-cover object-center"
          src={imageUrl}
          alt={`Imagem para o ${positionInGrid + 1}º card, de titulo: ${title}`}
        />
      </div>
      {/* card body */}
      <div className="px-2 py-2">
        <h1 className="font-bold text-xl mb-2">{title}</h1>
        <p className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
          eaque, exercitationem praesentium nihil.
        </p>
      </div>
      {/* card footer */}
      <div className="px-2">
        <CardTimerGroup createdAt={createdAt} updatedAt={updatedAt}></CardTimerGroup>
      </div>
    </section>
    // <div className="max-w-xs rounded-md overflow-hidden shadow-lg m-3">
    //   <img className="w-full" src={imageUrl} alt={`Imagem para o ${positionInGrid + 1}º card, de titulo: ${title}`} />

    //   <div className="font-bold text-xl mb-2">{title}</div>
    //   <p className="text-gray-700 text-base">
    //     {' '}
    //     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
    //     eaque, exercitationem praesentium nihil.
    //   </p>
    //   <CardTimerGroup createdAt={createdAt} updatedAt={updatedAt}></CardTimerGroup>

    //   <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
    //     #photography
    //   </span>
    //   <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
    //     #travel
    //   </span>
    //   <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
    //     #winter
    //   </span>
    // </div>
  );
}
