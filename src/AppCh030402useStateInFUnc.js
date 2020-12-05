import React, {useState} from 'react'

export default function AppCh030402useStateInFUnc() {
  /**
   * useState 함수의 인자에는 상태의 초깃값을 넣어준다. 현재 코드는 빈문자열.
   * useState에서 값의 형태는 클래스 컴포넌트틔 state와 달리 객체가 아니어도 된다.
   * 함수를 호출하면 배열이 반환된다.
   * 배열의 첫번째 요소는 현재 상태
   * 배열의 두번째 요소는 상태를 바꿔주는 setter 함수
   * 아래와 같이 배열 비구조화 할당을 통해 이름을 자유롭게 정할 수 있다.
   */
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('안녕하세요!');
  const onClickLeave = () => setMessage('안녕히 가세요!');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1>{message}</h1>
    </div>
  )
}
