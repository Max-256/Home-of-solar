import React, { useEffect, useState } from 'react';
import {HiOutlineSearch} from 'react-icons/hi';
import { getProducts } from '../services/products';
import {toast} from 'react-toastify';
import { getCategories } from '../services/categories';
import Card from './Card';
import _ from 'lodash';

function  Products({onAdd}) {
    const [products, setProducts] = useState([]);
    const [query, setQuery] = useState("");
    const [categories, setCategories] = useState([]);
    const [sortColumn, setSortColumn] = useState({path: 'title', order: 'asc'}); 

    useEffect(() => setProducts(getProducts()),[]);
    useEffect(() => setCategories(getCategories()),[]);

    const handleChange = e => setQuery(e.target.value);
    const shape = item => item.trim().toLowerCase();

    const handleSearch = (searchQuery) => {
        const target = searchQuery.toString().trim().toLowerCase();

        if(target.length === 0){
            toast.warn("enter an item to search");
            setQuery("");
            return;
        }

        const filtered = getProducts().filter( item => 
            shape(item.title).includes(target) ||
            shape(item.category).includes(target)); 
            
            filtered.length === 0 ? 
            toast.info("Sorry, we couldn't find " + searchQuery) : 
            setProducts(filtered);
            setQuery("");
    }

    const searchCategory = (target) => {
        const result = getProducts().filter(item => 
            item.category === target);
            result.length === 0 ? 
            toast.info(target + " are out of stock") : 
            setProducts(result);
    }

    const sorted = _.orderBy(products, [sortColumn.path],[sortColumn.order]);

    return (
        <div className='products-block'>
            <div className='products-header'>
                <div className='container input-group 
                    flex-nowrap form-control search-div'>
                    <input
                    onChange={handleChange}
                    value={query} 
                    className='search-box' 
                    placeholder='search...' 
                    type="text"  
                    />
                    <button 
                    className='search-icon' 
                    onClick={() => handleSearch(query)}>
                    <HiOutlineSearch />
                    </button>
                </div>
                <div className='products-nav-container'>
                    <ul className='products-nav'>
                    <li onClick={() => setProducts(getProducts())}>All</li>
                    { 
                    categories.map(cat => 
                    <li key={cat.id} onClick={() => searchCategory(cat.name)}>
                    {cat.name}
                    </li>) 
                    }
                    </ul>
                </div>
            </div>
            <div className='container'>
                    <div className='pdt-grid pdt-grid-1x2 pdt-grid-1x3 pdt-grid-1x4'>
                    {sorted.map(pdt => <Card key={pdt.id} pdt={pdt} onAdd={onAdd}/>)}
                    </div>                
            </div>
        </div>
    );
}

export default Products;