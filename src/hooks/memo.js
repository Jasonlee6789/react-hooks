import React, { Component, useState, useMemo, useEffect } from "react";

function Memo() {
  const [name, setName] = useState("lijing");
  const [age, setAge] = useState(17);
  // let age2 = (() => {
  //   return age >= 18 ? "成年人" : "未成年";
  // })();
  let age2 = useMemo(() => {
    console.log(1);
    return age < 18 ? "未成年" : "成年人";
  }, [age < 18]);
  useEffect(() => {
    console.log("更新完成之后");
  }, [age < 18]);
  console.log("开始更新了");
  return (
    <div>
      姓名：{name},<br />
      年龄：{age},<br />
      年龄阶段：{age2},<br />
      <button
        onClick={() => {
          // setAge({
          //   ...state,
          //   age: age + 2,
          // });
          setAge(age + 1);
          //setAge(age+1)建议使用这种分开的形式
        }}
      >
        点击后长大一岁
      </button>
    </div>
  );
}

export default Memo;
