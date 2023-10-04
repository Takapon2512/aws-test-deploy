import React from 'react';

const MultipleComponent = () => {
  return (
    <section className='mt-8 px-8'>
        <h2 className='mb-2'>かけ算</h2>
        <div className='flex'>
            <input 
            className='rounded'
            type="number" 
            name="かけ算1" 
            />
            <p className='mx-4'>×</p>
            <input 
            className='rounded'
            type="number" 
            name="かけ算2" 
            />
            <p className='mx-4'>=</p>
            <p></p>
        </div>
    </section>
  );
};

export default MultipleComponent;