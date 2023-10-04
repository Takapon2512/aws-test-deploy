import React from "react";

//Component
import PlusComponent from "@/components/plusComponent";
import MinusComponent from "@/components/minusComponent";
import MultipleComponent from "@/components/multipleComponent";
import DevideComponent from "@/components/devideComponent";

export default function Home() {
  return (
    <>    
    <header className="h-14 w-full">
      <h1 className="text-3xl font-bold text-center h-full items-center justify-center flex">
        四則演算アプリ
      </h1>
    </header>
    <PlusComponent />
    <MinusComponent />
    <MultipleComponent />
    <DevideComponent />
    </>
  );
};
