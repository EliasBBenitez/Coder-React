import React from 'react';
import Item from './Item';

function ItemList(props) {
  return (
    <div>
      <h2>Productos</h2>
      {props.items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ItemList;
