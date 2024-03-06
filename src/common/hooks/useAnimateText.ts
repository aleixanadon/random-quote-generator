import { useEffect, useState } from 'react'

const useAnimateText = (text: string) => {
  
  const [shownText, setShownText] = useState<string>("");
  const textLen = text.length-1;

  useEffect(() => {

    let index = 0;
    const interval = setInterval(() => {
      setShownText((prevShownText) => prevShownText + text[index]);
      index++;

      if (index === textLen) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);

  }, [text]);
  
  return {
    shownText
  }
}

export default useAnimateText