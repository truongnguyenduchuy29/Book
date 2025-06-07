import React from 'react';
import { Book } from '../types';
import BookCard from './BookCard';

interface BookGridProps {
  books: Book[];
  onBookClick: (book: Book) => void;
  title?: string;
}

const BookGrid: React.FC<BookGridProps> = ({ books, onBookClick, title }) => {
  if (books.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-gray-900 mb-2">Không tìm thấy sách</h3>
        <p className="text-gray-500">Thử điều chỉnh tìm kiếm hoặc bộ lọc của bạn.</p>
      </div>
    );
  }

  return (
    <div className="py-8">
      {title && (
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">{title}</h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onBookClick={onBookClick}
          />
        ))}
      </div>
    </div>
  );
};

export default BookGrid;