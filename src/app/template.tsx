"use client";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

interface TemplateRootProps {
  children: React.ReactNode;
}

const TemplateRoot = (props: TemplateRootProps) => {
  return (
    <>
      {props.children}
      <ReactQueryDevtools />
    </>
  );
};

export default TemplateRoot;
