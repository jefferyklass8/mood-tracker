import React from "react";

export default function Button(props) {
  const { text, dark, full } = props;
  return (
    <button
      className={
        "rounded-full overflow-hidden duration-200 hover:opacity-60 border-2 border-solid border-indigo-600" +
        (dark ? "text-white bg-indigo-600" : "text-indigo-600") +
        (full ? "grid place-items-center w-full" : "")
      }
    >
      <p className="px-6 py-2 font-mono sm:px-10 whitespace-nowrap sm:py-3">
        {text}
      </p>
    </button>
  );
}
