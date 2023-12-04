import React, { useEffect } from "react";
function Pre(props) {
  const [number, setNumber] = React.useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (number < 100) {
        const random = Math.floor(10 + Math.random() * 15);
        const newNumber = number + random < 100 ? number + random : 100;
        setNumber(newNumber);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [number]);
  return <div id={props.load ? "preloader" : "preloader-none"}>{props.load ? `${number}%` : "100%"}</div>;
}

export default Pre;
