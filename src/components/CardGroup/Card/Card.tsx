import React from 'react'
import { CardTimerGroup } from './CardTimerGroup/CardTimerGroup'
import './Card.css'

interface CardProps {
  props: {
    title?: string
    subtitle: string
    imageUrl?: string
    createdAt: Date
    updatedAt: Date
    positionInGrid: number
  }
}

export function Card({
  props: { createdAt, title = 'placeholder', imageUrl, updatedAt, positionInGrid, subtitle },
}: CardProps): JSX.Element {
  return (
    <section className="h-card-pristine rounded-md shadow-lg overflow-hidden w-card m-3 border border-black ">
      {/* img div */}
      <div className="h-card-pristine-image w-full transition-all duration-500 group-hover:h-[191px] relative">
        <div className="w-full h-full opacity-0 group-hover:opacity-40 bg-black absolute bottom-0 left-0 transition-all duration-700 z-10"></div>
        <img
          className="w-full h-full object-cover object-center group-hover:blur-[2px] transition-all duration-300"
          src={imageUrl}
          alt={`Imagem para o ${positionInGrid + 1}º card, de titulo: ${title}`}
        />
      </div>
      {/* card body */}
      <section className="px-2 group-hover:h-auto">
        <div className="pt-1 flex flex-col">
          <h1 className="font-bold text-xl leading-6 truncate">{title}</h1>
          <h2 className="text-sm leading-4 -mt-0.5">{subtitle}</h2>
        </div>
        <section className="invisible group-hover:visible h-0 duration-500 transition-all overflow-hidden group-hover:h-[130px]">
          <p className="text-justify text-base font-extralight pt-1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
            eaque, exercitationem praesentium nihil.aaaaaaaaaaaaaaaa a aa a
          </p>
        </section>
      </section>
      {/* card footer */}
      <section className="px-2 text-gray-500 text-base mt-1">
        <CardTimerGroup createdAt={createdAt} updatedAt={updatedAt} />
      </section>
    </section>
  )
}
