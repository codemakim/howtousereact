import React, { useState } from 'react';

function EventPractice(props) {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const onChangeUsername = e => setUsername(e.target.value);
  const onCChangeMessage = e => setMessage(e.target.value);

  const onClick = () => {
    alert(username + ' : ' + message);
    setUsername('');
    setMessage('');
  };

  const onKeyPress = e => {
    if(e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChangeUsername}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해보세요"
        value={message}
        onChange={onCChangeMessage}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </>
  );
}

export default EventPractice;