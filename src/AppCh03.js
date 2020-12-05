import "./App.css";
import AppCh030401stateInClass from "./AppCh030401stateInClass";
import AppCh030402useStateInFUnc from "./AppCh030402useStateInFUnc";
import AppCh03423manyUseState from "./AppCh03423manyUseState";

function AppCh03() {

  // 숫자 값을 props로 넘기는 코드 예. <AppCh0301 name={3}>리액트</AppCh0301>
  // return <AppCh0301 name="React">리액트</AppCh0301>
  return (
    <>
      <h1>클래스형 컴포넌트에서 state 사용</h1>
      <AppCh030401stateInClass/>
      <hr/>
      <h1>함수형 컴포넌트에서 useState 사용</h1>
      <AppCh030402useStateInFUnc/>
      <hr/>
      <h1>한 컴포넌트에서 useState 여러 번 사용하기</h1>
      <AppCh03423manyUseState/>
    </>
  );
}

export default AppCh03;