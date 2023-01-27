import React from "react";

export default function Form() {
  const submitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("submit");
    alert("SUBMITTED");
  };

  return (
    <form className="flex flex-col text-indigo-400 py-10">
      <label className="text-2xl" htmlFor="name">
        Name
      </label>
      <input
        type="text"
        id="name"
        className="border-2 border-indigo-400 border-solid rounded active:border-indigo-500 py-3"
      />
      <br />
      <label className="text-2xl" htmlFor="email">
        Email
      </label>
      <input
        type="email"
        id="email"
        placeholder=""
        className="border-2 border-indigo-400 border-solid rounded active:border-indigo-500 py-3"
      />
      <br />
      <label className="text-2xl" htmlFor="email" id="message">
        Message
      </label>
      <textarea
        name="message"
        id="message"
        cols={55}
        rows={10}
        className="border-2 border-indigo-400 border-solid rounded active:border-indigo-500 py-3"
      />
      <br />
      <button
        className="border-2 border-indigo-400 border-solid rounded hover:shadow-sm active:border-indigo-500 active:bg-indigo-500 active:text-indigo-50 p-3 mt-5"
        type="submit"
        onClick={submitHandler}
      >
        SUBMIT
      </button>
    </form>
  );
}
