import React from 'react'
import PropTypes from 'prop-types';

const AppCh0301 = ({name, children}) => {

  /**
   * 아래와 같은 할당문을 비구조화 할당 문법이라고 하며, 
   * 이 할당문을 작성하므로써, props.name 처럼 작성하지 않을 수 있다.
   * # 이 컴포넌트를 생성할때 'props'를 파라미터로 받도록 하면 아래와 같이 사용한다.
   * EX) const AppCh0301 = props => {};
   */
  // const {name, children} = props;

  return <div>
    새로운 컴포넌트의 이름은 {name} 입니다. <br/>
    children 값은 {children} 입니다.
  </div>;
};

AppCh0301.defaultProps = {
  name: '기본이름',
  children: '기본자식',
};

AppCh0301.propTypes = {
  name: PropTypes.string
};

export default AppCh0301;