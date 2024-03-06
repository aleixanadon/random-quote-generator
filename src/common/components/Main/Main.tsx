import React from 'react'
import Quote from '../Quote/Quote';

interface IQuote {
  quote: string;
  author: string;
  category: string;
};

export const mock_data: IQuote[] = [
  {
    quote: "Remember happiness doesn't depend upon who you are or what you have it depends solely on what you think.",
    author: "Dale Carnegie",
    category: "happiness"
  }
];

const Main = () => {

  const { quote, author, category } = mock_data[0];

  return (
    <main>
      <Quote quote={quote} author={author} category={category} loading={false} />
    </main>
  )
}

export default Main