import { ReactNode } from "react";

type TContainerProp = {
  children: ReactNode;
};

const Container = ({ children }: TContainerProp) => {
  return <div className="h-screen w-full max-w-5xl mx-auto">{children}</div>;
};

export default Container;
