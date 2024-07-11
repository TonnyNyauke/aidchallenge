'use client'

import Link from 'next/link';
import React, { useEffect, useState } from 'react'

type Book = {
  id: string;
  title: string;
  author: string;
  year: number;
  category: string;
  pdfUrl: string;
}

function Page() {
  const [recentBooks, setRecentBooks] = useState<Book[]>([]);

  useEffect(() => {
    const books = JSON.parse(localStorage.getItem('recentBooks') || '[]');
    console.log(books)
    setRecentBooks(books);
  },[])

  return (
    <div className=''>
      <nav className='flex flex-col mx-6 m-6'>
        <Link href='/homepage' className="border border-gray-500 px-4 py-2 rounded-sm w-2/6 mb-4 sm:mb-0
        sm:w-32">Back Home</Link>
        <h1 className='text text-xl font-semibold text-center'>Recently opened books</h1>
      </nav>
      <div className="m-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {recentBooks.map((book) => (
          <div key={book.id} className="border rounded-lg border-gray-300 p-4 m-4 w-72 mx-auto mt-8 px-4">
            <h2>{book.title}</h2> {/* This line renders the title once */}
            <p>{book.author}</p>
            <a href={book.pdfUrl} target="_blank" rel="noopener noreferrer"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mt-2 inline-block">Open PDF</a>
          </div>
        ))}
      </div>
    </div>
  );
  
}

export default Page;