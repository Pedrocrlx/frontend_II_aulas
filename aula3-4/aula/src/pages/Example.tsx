import { useState } from "react";

export default function Example() {
  const [name, setName] = useState("");

  return (
    <div className="flex items-center h-screen justify-center gap-50  bg-green-800">
      <input
        className="text-white font-bold text-5xl p-5 w-150"
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p className="text-white font-bold text-5xl">Hello {name}</p>
    </div>
  );
}
