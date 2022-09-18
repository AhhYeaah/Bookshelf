import React from 'react';
import { CardTimer } from './CardTimer/CardTimer';

interface CardTimerGroupProps {
  createdAt: Date;
  updatedAt: Date;
}

enum CardTimerType {
  UPDATE = 'Updated',
  CREATE = 'Created',
}

export function CardTimerGroup({ createdAt, updatedAt }: CardTimerGroupProps) {
  return (
    <>
      <CardTimer saidDate={createdAt} timerType={CardTimerType.CREATE} />
      <CardTimer saidDate={updatedAt} timerType={CardTimerType.UPDATE} />
    </>
  );
}
