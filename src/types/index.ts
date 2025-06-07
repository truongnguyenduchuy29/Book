export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  category: string;
  image: string;
  description: string;
  isbn: string;
  pages: number;
  language: string;
  publisher: string;
  publishDate: string;
  inStock: boolean;
  featured?: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  joinDate: string;
}

export interface CartItem {
  book: Book;
  quantity: number;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (book: Book) => void;
  removeFromCart: (bookId: string) => void;
  updateQuantity: (bookId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}