

import React from 'react';
import './Popular.css';
import data_product from '../Assets/data';
import Item from '../item/item';
import { Link } from 'react-router-dom';

const Popular = () => {
  return (
    <div className='popular'>
        <h1>TRENDING IN DHAKA</h1>
        <hr />
        <div className='popular-item'>
            {data_product.map((item, i) => (
                <Link key={i} to={item.link} className='item-link'>
                    <Item id={item.id} name={item.name} image={item.image} />
                </Link>
            ))}
        </div>
    </div>
  );
};

export default Popular;


