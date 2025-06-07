import React from 'react';
import { BookOpen, Star, Users, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-amber-50 to-orange-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Khám Phá</span>{' '}
                <span className="block text-amber-600 xl:inline">Cuốn Sách Tuyệt Vời</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Khám phá hàng nghìn cuốn sách từ các tác giả bán chạy nhất, tìm hiểu các thể loại mới và xây dựng thư viện cá nhân của bạn với bộ sưu tập được tuyển chọn của Thiên Đường Sách.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#featured"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
                  >
                    Duyệt Sách
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#categories"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-amber-700 bg-amber-100 hover:bg-amber-200 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
                  >
                    Xem Thể Loại
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      
      {/* Hero Stats */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto bg-amber-100 rounded-md">
                <BookOpen className="w-6 h-6 text-amber-600" />
              </div>
              <p className="mt-2 text-3xl font-extrabold text-gray-900">10K+</p>
              <p className="mt-1 text-sm text-gray-500">Sách Có Sẵn</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto bg-amber-100 rounded-md">
                <Users className="w-6 h-6 text-amber-600" />
              </div>
              <p className="mt-2 text-3xl font-extrabold text-gray-900">50K+</p>
              <p className="mt-1 text-sm text-gray-500">Độc Giả Hài Lòng</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto bg-amber-100 rounded-md">
                <Star className="w-6 h-6 text-amber-600" />
              </div>
              <p className="mt-2 text-3xl font-extrabold text-gray-900">4.8</p>
              <p className="mt-1 text-sm text-gray-500">Đánh Giá Trung Bình</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto bg-amber-100 rounded-md">
                <Award className="w-6 h-6 text-amber-600" />
              </div>
              <p className="mt-2 text-3xl font-extrabold text-gray-900">500+</p>
              <p className="mt-1 text-sm text-gray-500">Sách Đoạt Giải</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;