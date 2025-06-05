import React from 'react';
import Link from 'next/link';


interface ApiResponse {
  message: string;
}

const Page: React.FC = async () => {

  const res = await fetch('http://localhost:3000/api/hello', {
    cache: 'no-store',
  });
  const data: ApiResponse = await res.json();

  return (
    <div className="relative w-full h-screen">
      {/* 背景层 */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-50"></div>
      {/* 内容 */}
      <div className="absolute z-[100] w-full h-full top-[50%] flex flex-col items-center justify-center transform -translate-y-1/2 space-y-4">
        
        <Link
          href="/results"
          className="rounded px-14 md:px-28 py-2.5 overflow-hidden group bg-rose-600 relative hover:bg-rose-700 text-white transition-all duration-300"
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:translate-x-40 ease"></span>
          <span className="relative font-bold">View Results</span>
        </Link>
        {/* 显示 API 数据 */}
        <pre className="text-white bg-black p-4 rounded">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default Page;
