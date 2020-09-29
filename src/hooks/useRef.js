import React, { useState, useEffect, useRef } from "react";

function Txt(props) {
  let { text, setEdit } = props;
  useEffect(() => {
    console.log("状态副作用有改变1");
    return () => {
      console.log("111");
    };
  });
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
  let t = useRef(null);

  function toScroll() {
    let y = window.scrollY;

    t.current.style.transform = `translateY(${y}px)`;

    console.log(y);
  }

  useEffect(() => {
    console.log("组件更新了他要做事情。");
    console.log(t);
    window.addEventListener("scroll", toScroll);
    t.current.select();
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
      ref={t}
      onChange={(e) => {
        setText(e.target.value);
      }}
      onBlur={() => {
        setEdit(false);
      }}
    />
  );
}

function Ref() {
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
export default Ref;
