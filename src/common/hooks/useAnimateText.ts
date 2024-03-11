import { useEffect, useState } from 'react'

const useAnimateText = (text: string) => {
  
  const [shownText, setShownText] = useState<string>("");
  const textLen = text.length-1;

  useEffect(() => {

    let index = -1;
    const interval = setInterval(() => {
      index++;
      setShownText((prevShownText) => prevShownText + text[index]);
      
      if (index === textLen) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);

  }, []);
  
  return {
    shownText
  }
}

export default useAnimateText