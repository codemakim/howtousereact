import React from 'react';

const MyComponent = (props) => {
  return (
    <div>
      안녕. 내 이름은 {props.name}이야. <br/>
      children 값은 {props.children}이야.
    </div>
  );
};

MyComponent.defaultProps = {
  name: '기본 이름'
};

export default MyComponent;