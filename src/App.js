import "./App.css";

function App() {
  const name = "리액트";
  const style = {
    backgroundColor: "black", // background-color
    color: "aqua",
    fontSize: "48px", // font-size
    fontWeight: "bold", // font-weight
    padding: 16, // 단위 생략시 px로 지정됨.
  };

  return (
    <>
      <h1>hello {name}</h1>
      <h2>Fragment 테스트</h2>
      <hr />
      <div>
        <h1>3항 연산자를 이용한 조건부 렌더링</h1>
        {name === "리액트" ? (
          <h2>리액트입니다.</h2>
        ) : (
          <h2>리액트가 아닙니다.</h2>
        )}
        {name === "리액트" ? <h2>리액트입니다.</h2> : null}
      </div>

      <hr />
      <div>
        <h1>AND 연산자를 이용한 조건부 렌더링</h1>
        {name === "리액트" && <h2>리액트입니다.</h2>}
      </div>

      <hr />
      <div>
        <h1>변수 값이 undefined일 때 다른 값으로 대체하기</h1>
        <h2>{name || "리액트"}</h2>
      </div>

      <hr />
      <div>
        <h1>인라인 스타일링</h1>
        <div style={style}>{name}</div>
      </div>

      <hr />
      <div>
        <h1>class 대신 className</h1>
        <div className="react">{name}</div>
        <input />
      </div>

      <hr />
      <div>
        <h1>주석</h1>
        {/* 주석을 작성하는 방법 */}
        <div
          className="react" // 시작 태그를 여러줄로 작성하는 경우 이렇게 작성 가능
          name="commant-one"
        >
          {name}
        </div>
        <div>
          /* 이런 주석은 아마도 페이지에 그대로 보이지 않을까? - 커맨드로 보이는
          문자열은 중괄호로 감싸야된다는 warnning 문구가 나온다.*/
        </div>
      </div>
    </>
  );
}

export default App;
