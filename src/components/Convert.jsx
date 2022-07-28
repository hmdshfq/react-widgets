import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Convert({ language, text }) {
  const [translated, setTranslated] = useState('');
const [timedText, setTimedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setTimedText(text);
    }, 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: timedText,
            target: language.value,
            key: import.meta.env.VITE_API_KEY,
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };
    doTranslation();
  }, [language, timedText]);
  return (
    <div>
      <h1 className='ui header'>{translated}</h1>
    </div>
  );
}

export default Convert;
