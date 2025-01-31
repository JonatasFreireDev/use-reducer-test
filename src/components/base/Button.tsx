"use client";
import React, { memo } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Button = memo(({ children, onClick }: any) => {
  return (
    <button
      onClick={onClick}
      className="bg-grey border-2 rounded-lg border-grey-dark p-4 shadow-md font-normal"
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
