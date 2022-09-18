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
  let a;
  const html = (
    <section className="card-container group ">
      {/* img div */}
      <div className="card-image-container transition-all duration-500 group-hover:h-[191px] relative">
        <div className="w-full h-full opacity-0 group-hover:opacity-40 bg-black absolute bottom-0 left-0 transition-all duration-700 z-10"></div>
        <img
          className="card-image group-hover:blur-[2px] transition-all delay-400  duration-300"
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
        <section className="invisible group-hover:visible h-0 delay-500 duration-500 transition-all overflow-hidden group-hover:h-[130px]">
          <p ref={a} className="text-justify font-extralight pt-1">
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
  console.log(a);
  return html;
}
