import React, { useEffect, useState } from 'react'
import './Quote.css'
import { act } from 'react-dom/test-utils';
import useAnimateText from '../../hooks/useAnimateText';

interface QuoteProps {
  quote: string;
  author: string;
  category: string;
  loading: boolean;
}

const Quote: React.FC<QuoteProps> = (props) => {

  const { quote, author, category, loading } = props;
  const { shownText } = useAnimateText(quote);

  return (
    <blockquote cite="">
      {
        loading ? (
          <>
            loading
          </>
        ) : (
          <>
            <p>
              {shownText}
            </p>
            <div>{`—author`}</div>
          </>
        )
      }
    </blockquote>
  )
}

export default Quote