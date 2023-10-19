import React from "react";

const TextInput = ({ label, name, value, onChange }) => {
  return (
    <div className="flex flex-col mb-4 md:w-1/2">
      <label
        htmlFor={name}
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label}
      </label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={name}
      />
    </div>
  );
};

export default TextInput;
