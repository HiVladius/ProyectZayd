import React, { useState, useEffect } from "react";

const Countdown = ({ startDate, endDate }) => {
  const [timeRemaining, setTimeRemaining] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date().getTime();
      const difference = endDate.getTime() - currentTime;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeRemaining(
          `${days} días, ${hours} horas, ${minutes} minutos, ${seconds} segundos`
        );
      } else {
        setTimeRemaining("");
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [endDate]);

  return (
    <div>
      {timeRemaining === "" ? (
        <p>Evento por iniciar</p>
      ) : (
        <p>{timeRemaining}</p>
      )}
    </div>
  );
};

export default Countdown;
