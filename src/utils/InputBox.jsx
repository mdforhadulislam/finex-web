import React from "react";

const InputBox = ({
  type,
  title,
  placeholder,
  name,
  value,
  action,
  isTextArea,
  error,
}) => {
  return (
    <div className="w-full h-auto flex flex-col">
      {title && (
        <label
          htmlFor={name}
          className="w-full h-auto text-base font-medium text-gray-800 pl-2 p-[2px]"
        >
          {title}
        </label>
      )}
      {isTextArea ? (
        <textarea
          id={name}
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={action}
          className={`w-full h-auto p-2 outline-none border-[2px] px-2 py-1 rounded-md text-base ${error ? 'border-red-500' : 'border-gray-300'}`}
        ></textarea>
      ) : (
        <input
          id={name}
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={action}
          className={`w-full h-auto outline-none border-[2px] px-2 py-1 rounded-md text-base text-gray-700 ${error ? 'border-red-500' : 'border-gray-300'}`}
        />
      )}
      {error && (
        <span className="text-red-500 text-sm mt-1">{error}</span>
      )}
    </div>
  );
};

export default InputBox;