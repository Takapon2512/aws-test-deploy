import React from 'react';

const DevideComponent = () => {
  return (
    <section className='mt-8 px-8'>
        <h2 className='mb-2'>割り算</h2>
        <div className='flex'>
            <input 
            className='rounded'
            type="number" 
            name="割り算1" 
            />
            <p className='mx-4'>÷</p>
            <input 
            className='rounded'
            type="number" 
            name="割り算2" 
            />
            <p className='mx-4'>=</p>
            <p></p>
        </div>
    </section>
  );
};

export default DevideComponent;