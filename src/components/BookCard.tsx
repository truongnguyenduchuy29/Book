import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Book } from '../types';
import { useCart } from '../contexts/CartContext';

interface BookCardProps {
  book: Book;
  onBookClick: (book: Book) => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onBookClick }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(book);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  return (
    <div
      onClick={() => onBookClick(book)}
      className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
    >
      <div className="aspect-w-3 aspect-h-4 w-full overflow-hidden rounded-t-lg">
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {book.originalPrice && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-medium">
            Giảm giá
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2 group-hover:text-amber-700 transition-colors">
          {book.title}
        </h3>
        <p className="text-sm text-gray-600 mb-2">{book.author}</p>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(book.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">
            {book.rating} ({book.reviews} đánh giá)
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900">{formatPrice(book.price)}</span>
            {book.originalPrice && (
              <span className="text-sm text-gray-500 line-through">{formatPrice(book.originalPrice)}</span>
            )}
          </div>
          
          <button
            onClick={handleAddToCart}
            className="bg-amber-600 text-white p-2 rounded-md hover:bg-amber-700 transition-colors group-hover:scale-110 transform duration-200"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
        
        <div className="mt-2">
          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
            book.inStock 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {book.inStock ? 'Còn hàng' : 'Hết hàng'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;