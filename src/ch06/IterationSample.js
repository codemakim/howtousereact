import React, { useState } from 'react';

/* 데이터 배열을 컴포넌트 배열로 변환하기 */

const IterationSample = () => {
  const [names, setNames] = useState([
    {id: 1, text: '눈사람'},
    {id: 2, text: '얼음'},
    {id: 3, text: '눈'},
    {id: 4, text: '바람'},
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);

  const onChange = e => setInputText(e.target.value);
  const onClick = e => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText('');
  };
  const onPressEnter = e => {
    if(e.key === 'Enter') {
      onClick(e);
    }
  };

  const nameList = names.map(name => <li key={name.id}>{name.text}</li>);

  return (
    <>
      <input value={inputText} onChange={onChange} onKeyPress={onPressEnter}/>
      <button onClick={onClick}>추가</button>
      <ul>
        {nameList}
      </ul>
    </>
  );
};

export default IterationSample;