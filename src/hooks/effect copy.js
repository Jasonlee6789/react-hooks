import React, { Component, useState, useEffect } from "react";

function Txt(props) {
    let { text, setEdit } = props;
    useEffect(() => {
        console.log("状态副作用有改变1");
        return () => {
            console.log("111");
        }
    });
    return (
        <div>
            {text}<a onClick={(=> {
                setEdit(true);
            })}>
                编辑
            </a>
        </div>
    )
}

function Effect() {
  const [text, setText] = useState("这是今天的课程");
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    console.log("状态副作用有改变");
  });
  return (
    <div>
      {edit ? (
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          onBlur={() => {
            setEdit(false);
          }}
        />
      ) : (
        <Txt text={text} setEdit={setEdit} />
      )}
    </div>
  );
}
export default Effect;
