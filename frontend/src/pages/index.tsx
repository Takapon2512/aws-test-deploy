import React, { useState } from "react";

//Component
import PlusComponent from "@/components/plusComponent";
import MinusComponent from "@/components/minusComponent";
import MultipleComponent from "@/components/multipleComponent";
import DevideComponent from "@/components/devideComponent";

export default function Home() {
  const [apiSwitch, setApiSwitch] = useState<boolean>(false);

  const handleApi = () => setApiSwitch(!apiSwitch);

  return (
    <>    
    <header className="h-14 w-full">
      <h1 className="text-3xl font-bold text-center h-full items-center justify-center flex">
        四則演算アプリ
      </h1>
    </header>
    <PlusComponent status={apiSwitch} />
    <MinusComponent status={apiSwitch} />
    <MultipleComponent status={apiSwitch} />
    <DevideComponent status={apiSwitch} />
    <div className="mt-6 px-8 flex items-center">
      <button 
      className="w-30 bg-orange-500 px-3 py-1 rounded text-white mr-4"
      onClick={handleApi}
      >
        APIモード
      </button>
      <p>{ apiSwitch ? "オン" : "オフ" }</p>
    </div>
    </>
  );
};
