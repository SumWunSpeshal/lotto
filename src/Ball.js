import React from 'react';

function Ball(props) {
  return (
    <section className='balls__stage'>
      <figure className='balls__ball'>
        <span className='balls__number'>{props.num}</span>
      </figure>
    </section>
  );
}

export default Ball;
