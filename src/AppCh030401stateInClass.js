import React, { Component } from 'react';

class AppCh030401stateInClass extends Component {

  /**
   * 컴포넌트의 생성자 메서드.
   * 클래스 컴포넌트의 constructor를 작성할 땐, 반드시 super(props)를 호출해야 함.
   * 이 함수가 호출되면 현재 클래스형 컴포넌트가 상속하고 있는 리액트 컴포넌트 클래스가
   * 지닌 생성자 함수를 호출해줌.
   * @param {*} props 
   */
  constructor(props) {
    super(props);
    // state의 초깃값 설정하기
    this.state = {
      number: 0,
      fixedNumber: 0
    };
  }

  /**
   * constructor를 사용하지 않고 클래스 멤버 변수로 state = {...}; 
   * 형식으로 number, fixedNumber의 초깃값을 설정할 수 있다.
   */

  render() {
    const {number, fixedNumber} = this.state; // state를 조회할 때는 this.state로 조회합니다.
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
          onClick={() => {
            //this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다. 비동기적으로 업데이트 됩니다.
            //this.setState({number: number + 1});

            // prevState(첫번째 파라미터 | 기존 state 값)을 사용하면
            // onClick 함수 내에서 여러번 state 값을 변경할 수 있음.
            // 두번째 파라미터로 props를 넣을 수 있는데, (setState(prevState, props){...}) 
            // 그 파라미터는 별도의 인자를 넘겨받을 때 사용할 수 있다.
            this.setState(prevState => {
              return {
                number: prevState.number + 1
              };
            });

            this.setState(prevState => ({
              number: prevState.number + 1
            }));

            // setState의 두번째 파라미터로 콜백 함수를 넘겨주면 setState 동작이 끝난 후
            // 해당 함수의 동작을 실행할 수 있다.
            // *** 중요! 
            // setState 사용시 prevState 값을 넘겨주는 것과 그렇지 않을 때의 동작 차이가 매우 크다. 이 점을 숙지해야한다.
            this.setState({
              number: number + 1,
            }, () => {
              console.log('방금 setState가 호출되었습니다.');
              console.log(this.state);
            });
          }}
        >+1</button>
      </div>
    );
  }
}

export default AppCh030401stateInClass;