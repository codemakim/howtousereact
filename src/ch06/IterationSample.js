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

  const onRemove = id => {
    const nextNames = names.filter(name => name.id !== id);
    setNames(nextNames);
  };

  const nameList = names.map(name => (
    // event (e) 객체가 아닌 파라미터를 받을 땐 이렇게 호출하는 함수를 적어야 하는 것 같다.
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}> 
      {name.text}
    </li>
  ));

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