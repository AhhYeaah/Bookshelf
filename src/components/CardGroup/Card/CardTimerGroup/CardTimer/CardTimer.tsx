import React, { useEffect, useState } from 'react';

enum CardTimerType {
  UPDATE = 'Updated',
  CREATE = 'Created',
}

interface CardTimerProps {
  saidDate: Date;
  timerType: CardTimerType;
}

enum timeMeasurementType {
  SECOND = 'second',
  MINUTE = 'minute',
  HOURS = 'hour',
  DAY = 'day',
  MONTH = 'month',
  YEAR = 'year',
}
/**
 * Get whats the timetype by time in milisseconds
 * @param timeType string representing a timetype
 */

function whatKindOfTimeIsIt(timePassedSinceCreationInMiliseconds: number) {
  if (timePassedSinceCreationInMiliseconds < 60000) return timeMeasurementType.SECOND;
  if (timePassedSinceCreationInMiliseconds < 3600000) return timeMeasurementType.MINUTE;
  if (timePassedSinceCreationInMiliseconds < 86400000) return timeMeasurementType.HOURS;
  if (timePassedSinceCreationInMiliseconds < 2592000000) return timeMeasurementType.DAY;
  if (timePassedSinceCreationInMiliseconds < 31104000000) return timeMeasurementType.MONTH;
  return timeMeasurementType.YEAR;
}

/**
 * Get how much time in miliseconds is in a specific timetype
 * and if the component should keep track of said time.
 * @param timeType string representing a timetype
 */
function howMuchTimeUntilNextTick(timeType: timeMeasurementType) {
  if (timeType === timeMeasurementType.SECOND) return { tickTime: 1000, doTick: true };
  if (timeType === timeMeasurementType.MINUTE) return { tickTime: 60000, doTick: true };
  if (timeType === timeMeasurementType.HOURS) return { tickTime: 3600000, doTick: true };
  if (timeType === timeMeasurementType.DAY) return { tickTime: 86400000, doTick: false };
  if (timeType === timeMeasurementType.MONTH) return { tickTime: 2592000000, doTick: false };
  return { tickTime: 31104000000, doTick: false };
}

/**
 * Get usefull information about a specific date
 * @param createdAt Int representation of a number
 */
function getTimeInfo(createdAt: number) {
  const dateNow = Date.now();

  const timePassedSinceCreationInMiliseconds = dateNow - createdAt;
  const timeType = whatKindOfTimeIsIt(timePassedSinceCreationInMiliseconds);

  const { tickTime, doTick } = howMuchTimeUntilNextTick(timeType);

  return { timePassedSinceCreationInMiliseconds, timeType, tickTime, doTick };
}

export function CardTimer(props: CardTimerProps) {
  const [timePassedSinceCreation, setTimePassedSinceCreation] = useState<number>(1);
  const [timeUntilNextTick, setTimeUntilNextTick] = useState<number>(0);
  const [doComponentTick, setDoComponentTick] = useState<boolean>(false);

  useEffect(() => {
    if (doComponentTick) return;
    const { doTick, timePassedSinceCreationInMiliseconds, tickTime } = getTimeInfo(props.saidDate.valueOf());
    if (!doTick) {
      setDoComponentTick(false);
    }

    /**
     * There is 183000ms in 3 minutes and 3 seconds
     * we can find how much time has passed in a specific timetype by dividing 183000 by how
     * much time compounds a time type, like
     * Minute -> 60000ms, so 183000/60000 = 3 minutes.
     * Seconds -> 1000ms, so 183000/1000 = 183 seconds.
     * This will be usefull later.
     * Now, focus in the fact that the module of the division, show us how far we went into
     * the next timetype. We can use that to determine how long we will have to wait until
     * the first tick.
     */
    const timeUntilFirstTick = tickTime - (timePassedSinceCreationInMiliseconds % tickTime);

    // Now we wait.
    setTimeout(() => {
      const { timePassedSinceCreationInMiliseconds, tickTime, doTick } = getTimeInfo(props.saidDate.valueOf());
      setTimeUntilNextTick(tickTime);
      // I said that it would be usefull.
      setTimePassedSinceCreation(Math.trunc(timePassedSinceCreationInMiliseconds / tickTime));
      setDoComponentTick(doTick);
    }, timeUntilFirstTick);
  }, []);

  // First tick done, now we just need to wait the standart timetype time and refresh the component
  useEffect(() => {
    setTimeout(() => {
      const { doTick, timePassedSinceCreationInMiliseconds, tickTime } = getTimeInfo(props.saidDate.valueOf());
      setTimeUntilNextTick(tickTime);
      setTimePassedSinceCreation(Math.trunc(timePassedSinceCreationInMiliseconds / tickTime));
      setDoComponentTick(doTick);
    }, timeUntilNextTick);
  }, [timePassedSinceCreation]);

  const { timePassedSinceCreationInMiliseconds, tickTime, timeType } = getTimeInfo(props.saidDate.valueOf());

  const timePassedInSpecificType = Math.trunc(timePassedSinceCreationInMiliseconds / tickTime);
  return (
    <h2>{`${props.timerType} ${timePassedInSpecificType} ${timeType}${
      timePassedInSpecificType > 1 ? 's' : ''
    } ago`}</h2>
  );
}
