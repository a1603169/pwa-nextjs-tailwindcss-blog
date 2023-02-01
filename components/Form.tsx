import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useRouter } from "next/router";
import Loading from "./Loading";

export default function Form() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [isNameValid, setIsNameValid] = useState<boolean>(false);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [isMessageValid, setIsMessageValid] = useState<boolean>(false);
  // const [errorMessage, setErrorMessage] = useState<string[]>([]);
  // This is for update feature (Adding error Message in string[] and display it in the alert box & form box under the input box in the future)
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const validationCheck = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    if (emailRegex.test(emailRef.current?.value as string)) {
      console.log("email is valid");
      setIsEmailValid(true);
      console.log(isEmailValid);
    } else {
      console.log("email is invalid");
    }
    if (nameRef.current?.value !== "") {
      console.log("name is valid");
      setIsNameValid(true);
      console.log(isNameValid);
    } else {
      console.log("name is invalid");
    }
    return;
  };

  const validationCheckTextArea = (
    e: React.FocusEvent<HTMLTextAreaElement>
  ): void => {
    if (messageRef.current?.value !== "") {
      console.log("message is valid");
      setIsMessageValid(true);
    } else {
      console.log("message is invalid");
    }
    console.log(isMessageValid);
    return;
  };

  const submitHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    await validationCheck(e as any);
    await validationCheckTextArea(e as any);
    e.preventDefault();
    console.log(isNameValid, isEmailValid, isMessageValid);
    if (!isNameValid || !isEmailValid || !isMessageValid) {
      alert(
        "Please fill in all fields correctly before submitting. It should not be empty and correct form."
      );
      setError(false);
      return;
    } else {
      console.log("submit");
      console.log(nameRef.current?.value);
      console.log(emailRef.current?.value);
      console.log(messageRef.current?.value);
      setIsLoading(true);
      emailjs
        .send(
          "service_ud8pr9b",
          "template_78qcix1",
          {
            from_name: nameRef.current?.value,
            from_email: emailRef.current?.value,
            message: messageRef.current?.value,
          },
          "wVT0-67UubSWxS-Xd"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            setIsLoading(false);

            formRef.current?.reset();
            setSuccess(true);
          },
          (err) => {
            console.log("FAILED...", err);
            setIsLoading(false);
            alert("FAILED TO SEND MESSAGE");
          }
        );
    }
  };

  if (success) {
    setTimeout(() => {
      setSuccess(false);
      router.push("/success");
    }, 3000);
  }

  return (
    <>
      <div className="fixed max-lg:sticky">
        {isLoading ? <Loading /> : null}
      </div>
      <form
        className="flex flex-col text-indigo-400 py-10 max-sm:max-w-xs "
        ref={formRef}
      >
        <label className="text-2xl" htmlFor="name">
          Name
        </label>
        <input
          onBlur={validationCheck}
          ref={nameRef}
          type="text"
          id="name"
          className="border-2 border-indigo-400 border-solid rounded active:border-indigo-500 py-3 pl-2"
        />
        <br />
        <label className="text-2xl" htmlFor="email">
          Email
        </label>
        <input
          onBlur={validationCheck}
          ref={emailRef}
          type="email"
          placeholder=""
          className="border-2 border-indigo-400 border-solid rounded active:border-indigo-500 py-3 pl-2"
        />
        <br />
        <label className="text-2xl" htmlFor="email" id="message">
          Message
        </label>
        <textarea
          onBlur={validationCheckTextArea}
          name="message"
          cols={55}
          rows={10}
          className="border-2 border-indigo-400 border-solid rounded active:border-indigo-500 py-3 pl-2"
          ref={messageRef}
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
    </>
  );
}
