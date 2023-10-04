import React from 'react';

const minusComponent = () => {
  return (
    <section className='mt-8 px-8'>
        <h2 className='mb-2'>引き算</h2>
        <div className='flex'>
            <input 
            className='rounded'
            type="number" 
            name="引き算1" 
            />
            <p className='mx-4'>-</p>
            <input 
            className='rounded'
            type="number" 
            name="引き算2" 
            />
            <p className='mx-4'>=</p>
            <p></p>
        </div>
    </section>
  );
};

export default minusComponent;