import React, { useState, useEffect } from 'react';

//lib
import { apiClient } from '../../../lib/apiClients';

const DevideComponent = ({ status }: { status: boolean }) => {
  const [value1, setValue1] = useState<string>("");
  const [value2, setValue2] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const changeValue1 = (e: React.ChangeEvent<HTMLInputElement>) => setValue1(e.target.value);
  const changeValue2 = (e: React.ChangeEvent<HTMLInputElement>) => setValue2(e.target.value);

  const valuesSend = async () => {
    if (status) {
      const response = await apiClient.post("/division", { value1: value1, value2: value2 });
  
      try {
        setResult(response.data);
      } catch (err) {
        console.error(err);
      };
    } else {
      const numValue1 = Number(value1);
      const numValue2 = Number(value2);

      const result: number = Math.floor((numValue1 / numValue2) * 100) / 100;
      setResult(String(result));
    };
  };

  useEffect(() => {
    valuesSend();
  }, [value1, value2]);

  return (
    <section className='mt-8 px-8'>
        <h2 className='mb-2'>割り算</h2>
        <div className='flex'>
            <input 
            className='rounded p-2'
            type="number" 
            name="割り算1" 
            onChange={(e) => changeValue1(e)}
            value={value1}
            />
            <p className='mx-4 flex items-center justify-center w-3'>÷</p>
            <input 
            className='rounded p-2'
            type="number" 
            name="割り算2" 
            onChange={(e) => changeValue2(e)}
            value={value2}
            />
            <p className='mx-4 flex items-center'>=</p>
            <p className='flex items-center'>{result === "NaN" ? "0" : result}</p>
        </div>
    </section>
  );
};

export default DevideComponent;