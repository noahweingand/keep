"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export function ContactForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const isSubmitDisabled = Boolean(firstName && lastName && email && message);

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    const body = {
      firstName,
      lastName,
      email,
      message,
    };

    try {
      const res = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify(body),
      });

      if (res.status === 200) {
        toast.success("Sent");
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
      } else {
        toast.error("Try again later!");
        console.log(res);
      }
    } catch (e) {
      console.log(e);
      toast.error("Try again later");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="w-full max-w-lg m-8" onSubmit={onSubmit}>
      <div className="flex flex-wrap -mx-3 mb-4">
        <fieldset className="tui-fieldset w-full md:w-1/2 px-3 mb-4 md:mb-0">
          <legend className="tui-legend block uppercase tracking-wide">First Name</legend>
          <input
            id="first-name"
            aria-label="First name"
            className="tui-textarea appearance-none block w-full py-3 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="..."
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            readOnly={isLoading}
          />
        </fieldset>
        <fieldset className="tui-fieldset w-full md:w-1/2 px-3">
          <legend className="tui-legend block uppercase tracking-wide">Last Name</legend>
          <input
            id="last-name"
            aria-label="Last name"
            className="tui-textarea appearance-none block w-full py-3 px-4 leading-tight focus:outline-none"
            type="text"
            placeholder="..."
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            readOnly={isLoading}
          />
        </fieldset>
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <fieldset className="tui-fieldset w-full px-3">
          <legend className="tui-legend block uppercase tracking-wide">E-mail</legend>
          <input
            id="email"
            aria-label="Email"
            className="tui-textarea appearance-none block w-full py-3 px-4 leading-tight focus:outline-none"
            type="email"
            placeholder="..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            readOnly={isLoading}
          />
        </fieldset>
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <fieldset className="tui-fieldset w-full px-3">
          <legend className="block uppercase tracking-wide">Message</legend>
          <textarea
            id="message"
            aria-label="Message"
            className="tui-textarea no-resize appearance-none block w-full py-3 px-4 mb-3 leading-tight focus:outline-none h-48 resize-none"
            placeholder="..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            readOnly={isLoading}
          ></textarea>
        </fieldset>
      </div>
      <div className="flex justify-end">
        <button
          className={
            isSubmitDisabled
              ? "tui-button scandisk-button white-168 white-text text-lg disabled"
              : "tui-button scandisk-button white-168 white-text text-lg"
          }
          disabled={isSubmitDisabled}
          type="submit"
        >
          Send
        </button>
      </div>
    </form>
  );
}
