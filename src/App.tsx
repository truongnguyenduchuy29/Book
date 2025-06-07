import React, { useState, useMemo } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryFilter from './components/CategoryFilter';
import BookGrid from './components/BookGrid';
import BookModal from './components/BookModal';
import { books } from './data/books';
import { Book } from './types';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tất Cả');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  const filteredBooks = useMemo(() => {
    return books.filter(book => {
      const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           book.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'Tất Cả' || book.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const featuredBooks = books.filter(book => book.featured);

  const handleBookClick = (book: Book) => {
    setSelectedBook(book);
    setIsBookModalOpen(true);
  };

  const closeBookModal = () => {
    setIsBookModalOpen(false);
    setSelectedBook(null);
  };

  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen bg-gray-50">
          <Header 
            onSearch={setSearchQuery} 
            searchQuery={searchQuery}
          />
          
          {!searchQuery && (
            <>
              <Hero />
              <section id="featured\" className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <BookGrid
                    books={featuredBooks}
                    onBookClick={handleBookClick}
                    title="Sách Nổi Bật"
                  />
                </div>
              </section>
            </>
          )}

          <section id="categories">
            <CategoryFilter
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </section>

          <section className="bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <BookGrid
                books={filteredBooks}
                onBookClick={handleBookClick}
                title={searchQuery ? `Kết quả tìm kiếm cho "${searchQuery}"` : `Sách ${selectedCategory}`}
              />
            </div>
          </section>

          <BookModal
            book={selectedBook}
            isOpen={isBookModalOpen}
            onClose={closeBookModal}
          />

          {/* Footer */}
          <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-2">
                  <h3 className="text-2xl font-bold text-amber-400 mb-4">Thiên Đường Sách</h3>
                  <p className="text-gray-300 mb-4">
                    Người bạn đồng hành đáng tin cậy để khám phá, tìm hiểu và mua những cuốn sách hay nhất từ khắp nơi trên thế giới.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Liên Kết Nhanh</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li><a href="#" className="hover:text-amber-400 transition-colors">Về Chúng Tôi</a></li>
                    <li><a href="#" className="hover:text-amber-400 transition-colors">Liên Hệ</a></li>
                    <li><a href="#" className="hover:text-amber-400 transition-colors">Câu Hỏi Thường Gặp</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Hỗ Trợ</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li><a href="#" className="hover:text-amber-400 transition-colors">Trung Tâm Trợ Giúp</a></li>
                    <li><a href="#" className="hover:text-amber-400 transition-colors">Đổi Trả</a></li>
                    <li><a href="#" className="hover:text-amber-400 transition-colors">Vận Chuyển</a></li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                <p>&copy; 2024 Thiên Đường Sách. Tất cả quyền được bảo lưu.</p>
              </div>
            </div>
          </footer>
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;