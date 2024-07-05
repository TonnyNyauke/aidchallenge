'use client'

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
    <div>
      <h1>Recently opened books</h1>
      {recentBooks.map((book) => (
        <div key={book.id} className="border rounded-lg border-gray-300 p-4 mb-4 max-w-4xl mx-auto mt-8 px-4">
          <h2>{book.title}</h2> {/* This line renders the title once */}
          <p>{book.author}</p>
          <a href={book.pdfUrl} target="_blank" rel="noopener noreferrer">Open PDF</a>
        </div>
      ))}
    </div>
  );
  
}

export default Page;