import React from 'react';
import { X, Star, ShoppingCart, Info } from 'lucide-react';
import { Book } from '../types';
import { useCart } from '../contexts/CartContext';

interface BookModalProps {
  book: Book | null;
  isOpen: boolean;
  onClose: () => void;
}

const BookModal: React.FC<BookModalProps> = ({ book, isOpen, onClose }) => {
  const { addToCart } = useCart();

  if (!isOpen || !book) return null;

  const handleAddToCart = () => {
    addToCart(book);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={onClose} />

        <div className="inline-block w-full max-w-4xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-2xl font-bold text-gray-900">Chi Tiết Sách</h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Book Image */}
              <div className="flex justify-center">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full max-w-sm h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Book Information */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{book.title}</h1>
                  <p className="text-xl text-gray-600 mb-4">của {book.author}</p>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(book.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-3 text-lg text-gray-600">
                      {book.rating} ({book.reviews} đánh giá)
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-bold text-gray-900">{formatPrice(book.price)}</span>
                  {book.originalPrice && (
                    <span className="text-xl text-gray-500 line-through">{formatPrice(book.originalPrice)}</span>
                  )}
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    book.inStock 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {book.inStock ? 'Còn hàng' : 'Hết hàng'}
                  </span>
                </div>

                <button
                  onClick={handleAddToCart}
                  disabled={!book.inStock}
                  className="w-full bg-amber-600 text-white py-3 px-6 rounded-lg hover:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Thêm vào giỏ hàng</span>
                </button>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Info className="h-5 w-5 mr-2" />
                    Thông tin sách
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-600">ISBN:</span>
                      <p className="text-gray-900">{book.isbn}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-600">Số trang:</span>
                      <p className="text-gray-900">{book.pages}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-600">Ngôn ngữ:</span>
                      <p className="text-gray-900">{book.language}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-600">Nhà xuất bản:</span>
                      <p className="text-gray-900">{book.publisher}</p>
                    </div>
                    <div className="col-span-2">
                      <span className="font-medium text-gray-600">Ngày xuất bản:</span>
                      <p className="text-gray-900">{new Date(book.publishDate).toLocaleDateString('vi-VN')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mô tả</h3>
              <p className="text-gray-700 leading-relaxed">{book.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookModal;