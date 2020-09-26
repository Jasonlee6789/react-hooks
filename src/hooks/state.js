import React, { Component, useState } from "react";
function State() {
  console.log(useState(18));
  const [state, setAge] = useState({
    name: "lijing",
    age: 18,
  });
  let { name, age } = state;

  // const [name, setName] = useState("leo");
  // const [age, setAge] = useState(18);

  // function setage() {
  //     setAge(age+1)
  // }
  return (
    <div>
      姓名：{name},<br />
      年龄：{age},<br />
      <button
        onClick={() => {
          setAge({
            ...state,
            age: age + 1,
          });

          //setAge(age+1)建议使用这种分开的形式
        }}
      >
        点击后长大一岁
      </button>
    </div>
  );
}
export default State;
