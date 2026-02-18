"use client";
import { useRef } from "react";

const inputFocus = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Clique no botão para focar" />
      <button onClick={() => inputRef.current?.focus()}>Focar no Input</button>
    </div>
  );
};

export default inputFocus;