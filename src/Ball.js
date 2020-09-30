import React from 'react';

function Ball({ num }) {
  return (
    <section className='balls__stage'>
      <figure className='balls__ball'>
        <span className='balls__number'>{num}</span>
      </figure>
    </section>
  );
}

export default Ball;
