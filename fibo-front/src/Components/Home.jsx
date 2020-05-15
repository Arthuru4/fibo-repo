import React, { useState } from "react";
import { setData } from "../scripts/axiosService";

const Generator = () => {
  const [clickable, setClickable] = useState(true);
  const [value, setValue] = useState("");
  const [fibo, setFibo] = useState("");
  const [search, setSearch] = useState(false);
  const prevent = function(evt) {
    evt.preventDefault();
  };
  const onClickHandler = () => {
    if (!clickable) return;

    setClickable(false);
    document.body.addEventListener("click", prevent);
    setSearch(true);
    setData(value)
      .then(res => {
        setFibo(res.data.fibo);
      })
      .finally(() => {
        setSearch(false);
        document.body.removeEventListener("click", prevent);
      });
  };
  const onChangeHandler = e => {
    let _val = e.target.value;
    if (fibo) setFibo("");

    if (Number.isNaN(+_val) || !Number.isInteger(+_val) || +_val <= 0) {
      setClickable(false);
      return;
    }
    if (!clickable) setClickable(true);
    setValue(_val);
  };
  const validateInput = e => {
    let _val = e.key;
    if (Number.isNaN(+_val) || !Number.isInteger(+_val) || +_val <= 0) {
      e.preventDefault();
      setClickable(false);
    }
  };

  return (
    <div>
      <div>
        <input
          placeholder={"integer > 0"}
          type="text"
          onChange={onChangeHandler}
          onBlur={onChangeHandler}
          onKeyPress={validateInput}
        />
        <button disabled={!clickable} onClick={onClickHandler}>
          {search ? "Counting, wait" : "Get result"}
        </button>
        {fibo && <div className={"result"}>Fibo is: {fibo}</div>}
      </div>
      <div />
    </div>
  );
};

export default Generator;
