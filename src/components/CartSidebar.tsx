import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  const { items, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();
  const { user } = useAuth();

  if (!isOpen) return null;

  const handleCheckout = () => {
    // In a real app, this would redirect to checkout page
    alert('Chức năng thanh toán sẽ được triển khai ở đây!');
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose} />
          
          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <div className="w-screen max-w-md">
              <div className="h-full flex flex-col bg-white shadow-xl">
                <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2 className="text-lg font-medium text-gray-900">Giỏ hàng</h2>
                    <div className="ml-3 h-7 flex items-center">
                      <button
                        onClick={onClose}
                        className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        <X className="h-6 w-6" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    {items.length === 0 ? (
                      <div className="text-center py-12">
                        <ShoppingBag className="mx-auto h-12 w-12 text-gray-400" />
                        <h3 className="mt-2 text-sm font-medium text-gray-900">Giỏ hàng trống</h3>
                        <p className="mt-1 text-sm text-gray-500">Hãy bắt đầu thêm sách!</p>
                      </div>
                    ) : (
                      <div className="flow-root">
                        <ul className="-my-6 divide-y divide-gray-200">
                          {items.map((item) => (
                            <li key={item.book.id} className="py-6 flex">
                              <div className="flex-shrink-0 w-16 h-20 border border-gray-200 rounded-md overflow-hidden">
                                <img
                                  src={item.book.image}
                                  alt={item.book.title}
                                  className="w-full h-full object-cover"
                                />
                              </div>

                              <div className="ml-4 flex-1 flex flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3 className="text-sm">{item.book.title}</h3>
                                    <p className="ml-4">{formatPrice(item.book.price)}</p>
                                  </div>
                                  <p className="mt-1 text-sm text-gray-500">{item.book.author}</p>
                                </div>
                                <div className="flex-1 flex items-end justify-between text-sm">
                                  <div className="flex items-center space-x-2">
                                    <button
                                      onClick={() => updateQuantity(item.book.id, item.quantity - 1)}
                                      className="p-1 rounded-md text-gray-400 hover:text-gray-600"
                                    >
                                      <Minus className="h-4 w-4" />
                                    </button>
                                    <span className="text-gray-500">SL {item.quantity}</span>
                                    <button
                                      onClick={() => updateQuantity(item.book.id, item.quantity + 1)}
                                      className="p-1 rounded-md text-gray-400 hover:text-gray-600"
                                    >
                                      <Plus className="h-4 w-4" />
                                    </button>
                                  </div>

                                  <div className="flex">
                                    <button
                                      onClick={() => removeFromCart(item.book.id)}
                                      className="font-medium text-amber-600 hover:text-amber-500"
                                    >
                                      Xóa
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {items.length > 0 && (
                  <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Tổng cộng</p>
                      <p>{formatPrice(totalPrice)}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">Phí vận chuyển sẽ được tính khi thanh toán.</p>
                    <div className="mt-6">
                      <button
                        onClick={handleCheckout}
                        className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-amber-600 hover:bg-amber-700"
                      >
                        Thanh toán
                      </button>
                    </div>
                    {!user && (
                      <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                        <p>
                          hoặc{' '}
                          <button
                            onClick={onClose}
                            className="text-amber-600 font-medium hover:text-amber-500"
                          >
                            Tiếp tục mua sắm
                          </button>
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;