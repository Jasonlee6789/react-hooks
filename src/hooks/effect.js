import React, { useState, useEffect } from "react";

function Txt(props) {
  let { text, setEdit } = props;
  //   useEffect(() => {
  //     console.log("状态副作用有改变1");
  //     return () => {
  //       console.log("111");
  //     };
  //   });
  return (
    <div>
      {text}
      <a
        onClick={() => {
          setEdit(true);
        }}
      >
        编辑
      </a>
    </div>
  );
}

function Edit(props) {
  const { text, setText, setEdit } = props;

  function toScroll() {
    let txt = document.querySelector("#txt");

    let y = window.scrollY;

    txt.style.transform = `translateY(${y}px)`;

    console.log(y);
  }

  useEffect(() => {
    console.log("组件更新了他要做事情。");

    window.addEventListener("scroll", toScroll);

    return () => {
      console.log("组件卸载");
      window.removeEventListener("scroll", toScroll);
    };
  }, []);
  return (
    <input
      type="text"
      value={text}
      id="txt"
      onChange={(e) => {
        setText(e.target.value);
      }}
      onBlur={() => {
        setEdit(false);
      }}
    />
  );
}

function Effect() {
  const [text, setText] = useState("这是今天的课程");
  const [edit, setEdit] = useState(false);
  //只监听edit 发生改变
  useEffect(() => {
    console.log("状态副作用有改变");
  }, [edit, text]);
  return (
    <div>
      {Edit ? (
        <Edit text={text} setText={setText} setEdit={setEdit} />
      ) : (
        <Txt text={text} setEdit={setEdit} />
      )}
      {/* 页面内容<br />
          页面内容<br /> */}
      {[...".".repeat(50)].map((item, index) => {
        return <div key={index}>页面内容</div>;
      })}
    </div>
  );
}
export default Effect;
