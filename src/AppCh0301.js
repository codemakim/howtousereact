import React from 'react'
import PropTypes from 'prop-types';

const AppCh0301 = ({name, children, favoriteNumber}) => {

  /**
   * 아래와 같은 할당문을 비구조화 할당 문법이라고 하며, 
   * 이 할당문을 작성하므로써, props.name 처럼 작성하지 않을 수 있다.
   * # 이 컴포넌트를 생성할때 'props'를 파라미터로 받도록 하면 아래와 같이 사용한다.
   * EX) const AppCh0301 = props => {};
   */
  // const {name, children} = props;

  return <div>
    새로운 컴포넌트의 이름은 {name} 입니다. <br/>
    children 값은 {children} 입니다. <br/>
    좋아하는 숫자는 {favoriteNumber} 입니다.
  </div>;
};

// props가  제공되지 않았을 때 사용할 기본값
AppCh0301.defaultProps = {
  name: '기본이름',
  children: '기본자식',
};

// props의 타입을 지정.
// isRequired : 필수로 넘겨받아야 하는 props임을 설정
AppCh0301.propTypes = {
  name: PropTypes.string, 
  favoriteNumber: PropTypes.number.isRequired
};

/**
 * 더 많은 propType 종류
 * array: 배열
 * arrayOf(다른 propType): 특정 propType으로 이루어진 배열
 * bool: true 또는 false
 * func: 함수
 * number: 숫자
 * object: 객체
 * string: 문자열
 * symbol: ES6의 Symbol
 * node: 랜더링할 수 있는 모든 것 (숫자, 문자열, JSX코드, children)
 * instanceOf(클래스): 특정 클래스의 인스턴스 (ex. instanceOf(MyClass))
 * oneOf(['dog', 'cat']): 주어진 배열 요소 값 중 하나
 * oneOfType([PropTypes.string, PropTypes.number]): 주어진 배열 안의 타입 중 하나
 * objectOf(PropTypes.number): 객체의 모든 키 값이 인자로 주어진 propTypes인 객체
 * shape({name: PropTypes.string, num: PropTypes.number}): 주어진 스키마를 가진 객체
 * any: 아무 종류
 */


export default AppCh0301;