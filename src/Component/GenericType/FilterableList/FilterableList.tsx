import React, { useEffect, useState } from 'react'

type FilterableListProps<T> = {
    products: T[];
}


const priceRange = {
    lowPrice: 'lowPrice',
    mediumPrice: 'mediumPrice',
    highPrice:'highPrice'
}
export default function FilterableList<T extends {id: number; name: string, price: number}>({products}: FilterableListProps<T>) {
    const [filteredItems, setFilteredItems] = useState(products);
    const [searchItem, setSearchItem] = useState('');
    
    useEffect(() => {
        const filter = () => {
            if(searchItem.trim() !== ''){
                const filtered = products.filter((item) => 
                    item.name.toLocaleLowerCase().startsWith(searchItem));
                setFilteredItems(filtered);
                console.log(filtered)
            } else {
                setFilteredItems(products);
            }
        }
        filter();
    },[searchItem])

    
  return (
    <div>
        <input 
        type='text' value={searchItem} onChange={(e) => setSearchItem(e.target.value)}
        />

        
        {filteredItems.map((item) => (
            <li>{item.name}</li>
        ))}
    </div>
  )
}
