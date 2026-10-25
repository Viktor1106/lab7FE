import React from 'react';
import GoodsCard from './GoodsCard';

function Gallery() {
    const products = [
        { id: 1, name: 'Apple', price: 15, image: 'https://cdn-icons-png.flaticon.com/512/415/415733.png' },
        { id: 2, name: 'Pear', price: 20, image: 'https://cdn-icons-png.flaticon.com/512/415/415734.png' },
        { id: 3, name: 'Grape', price: 25, image: 'https://cdn-icons-png.flaticon.com/512/415/415735.png' },
        { id: 4, name: 'Peach', price: 18, image: 'https://cdn-icons-png.flaticon.com/512/415/415736.png' },
        { id: 5, name: 'Banana', price: 30, image: 'https://cdn-icons-png.flaticon.com/512/415/415737.png' },
        { id: 6, name: 'Watermelon', price: 50, image: 'https://cdn-icons-png.flaticon.com/512/415/415738.png' }
    ];

    return (
        <div className="gallery">
            {products.map(product => (
                <GoodsCard
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                />
            ))}
        </div>
    );
}

export default Gallery;