import React from 'react';

const PlusComponent = () => {
  return (
    <section className='mt-8 px-8'>
        <h2 className='mb-2'>足し算</h2>
        <div className='flex'>
            <input 
            className='rounded'
            type="number" 
            name="足し算1" 
            />
            <p className='mx-4'>+</p>
            <input 
            className='rounded'
            type="number" 
            name="足し算2" 
            />
            <p className='mx-4'>=</p>
            <p></p>
        </div>
    </section>
  );
};

export default PlusComponent;