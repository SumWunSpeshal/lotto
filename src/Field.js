import React from 'react';

function Field(props) {
  return (
    <li className='board__item'>
      <button
        onClick={() => props.eventHandler(props.value)}
        className={
          'board__button' +
          (props.isActive ? ' is-active' : '') +
          (props.isDisabled && !props.isActive ? ' is-disabled' : '')
        }
      >
        {props.value}
        <svg className='board__cross' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 111.1785 111.4073'>
          <path
            d='M27.4757,123.1172c18.4008-24.6937,43.827-43.1,65.3288-65.1463,13.3595-13.6977,26.2785-29.5267,44.6117-35.0034'
            transform='translate(-27.4757 -22.9675)'
          />
          <path
            d='M40.9273,26.3983C41.99,31.39,44.436,35.9657,46.96,40.4014a316.2107,316.2107,0,0,0,44.51,60.2629c13.3863,14.2247,28.6535,27.5349,47.1845,33.71'
            transform='translate(-27.4757 -22.9675)'
          />
        </svg>
      </button>
    </li>
  );
}

export default Field;
