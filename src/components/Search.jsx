import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [input, setInput] = useState('programming');
  const [debouncedInput, setDebouncedInput] = useState(input);
  const [results, setResults] = useState([]);

  const handleChange = event => {
    setInput(event.target.value);
  };
  // Runs for the first time and sets the debouncedInput to input
  // Also runs anytime search input changes
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedInput(input)
    },1000)
    return () => {
      clearTimeout(timerId)
    };
  }, [input]);
  // Runs for the first time and searches for the input term
  // Also runs whenever debouncedInput variable changes
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedInput,
        },
      });
      setResults(data.query.search);
    };
    search();
  }, [debouncedInput]);
  const renderedResults = results.map(result => {
    return (
      <div key={result.pageid} className='item'>
        <div className='right floated content'>
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className='ui button'>
            Go
          </a>
        </div>
        <div className='content'>
          <h2 className='header'>{result.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: result.snippet }}></p>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter Search Term</label>
          <input
            type='text'
            className='input'
            value={input}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className='ui celled list'>{renderedResults}</div>
    </div>
  );
};

export default Search;
