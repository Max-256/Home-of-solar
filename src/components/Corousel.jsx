import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import { getFakeItems } from '../services/demos';

function Corousel(props) {
    const [items, setItems] = useState([]);
    const [sliderRef, setSliderRef] = useState(null);

    useEffect(() => setItems(getFakeItems()),[]);

    const sliderSettings = {
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        responsive: [
            { breakpoint: 1024,
              settings: { slidesToShow: 3}
            },
            { breakpoint: 770,
              settings: { slidesToShow: 2}
            },
            { breakpoint: 490,
              settings: { slidesToShow: 1}
            } ]
    }

    return (
      <div className='carousel-block'>
        <div className='controls'>      
          <button onClick={sliderRef?.slickPrev}>
          <FaChevronLeft /> 
          </button>
          <h5 className='trending'>TRENDING PRODUCTS</h5>
          <button onClick={sliderRef?.slickNext}>
          <FaChevronRight />
          </button>
        </div>
        <div className='carousel-container'>          
          <div className='slider-container'>
          <Slider ref={setSliderRef} {...sliderSettings}>
           {
            items.map(item=> (
            <div key={item.id} className='content'>
            <Link to={`/product/${item.id}`}>
            <img src={item.image} className="content-image" alt={item.title} />
            </Link>
            <div className='text-block'>
            <p className='content-text'>
              {item.title}</p>
            <p className='content-text'><b>origin:</b> 
              {item.origin}</p>
            </div>
            </div>
            ))}
          </Slider>
          </div>
        </div>
      </div>    
    );
}

export default Corousel;