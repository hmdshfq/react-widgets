import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

function Translate() {
  const options = [
    {
      label: 'Arabic',
      value: 'ar',
    },
    {
      label: 'Urdu',
      value: 'ur',
    },
    {
      label: 'Pashto',
      value: 'ps',
    },
    {
      label: 'Polish',
      value: 'pl',
    },
    {
      label: 'German',
      value: 'de',
    },
  ];
  const [language, setLanguage] = useState({ label: 'Pashto', value: 'ps' });
  const [text, setText] = useState('');
  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter text</label>
          <input
            type='text'
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </div>
      </div>
      <Dropdown
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
        label='Select a language'
      />
      <hr />
      <h3 className='ui header'>Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
}

export default Translate;
