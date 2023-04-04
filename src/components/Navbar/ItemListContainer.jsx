import { useState, useEffect } from 'react';

function ItemListContainer(props) {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const items = [];
    setItems(items);
    setFilteredItems(items);
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      const filteredItems = items.filter((item) => item.category === selectedCategory);
      setFilteredItems(filteredItems);
    } else {
      setFilteredItems(items);
    }
  }, [items, selectedCategory]);

}
