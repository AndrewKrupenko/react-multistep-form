import React, { ReactNode } from "react";

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

const FormWrapper = ({ title, children }: FormWrapperProps) => {
  return (
    <>
      <h2 className="form-wrapper-title">{title}</h2>
      <div className="form-wrapper-children">{children}</div>
    </>
  );
};

export default FormWrapper;
