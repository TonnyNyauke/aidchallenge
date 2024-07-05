'use client';

import React, { useState, useEffect } from 'react';
import db from '../../dbconnect';
import { collection, getDocs } from 'firebase/firestore';
import Link from 'next/link';

type Book = {
  id: string;
  title: string;
  author: string;
  year: string;
  category: string;
  pdfUrl: string;
};

function Page() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const retrieveBooks = async () => {
      try {
        const fetchedData: Book[] = [];

        const booksCollection = collection(db, 'Books');
        const snapshot = await getDocs(booksCollection);

        snapshot.forEach((booksDoc) => {
          fetchedData.push({...booksDoc.data(), id: booksDoc.id } as Book);
        });

        setBooks(fetchedData);
      } catch (error) {
        console.log(error);
      }
    };
    retrieveBooks();
  }, []);

  const openBook = (book: Book) => {
    console.log(book)
    let recentBooks = JSON.parse(localStorage.getItem('recentBooks') || '[]');
    recentBooks = [book, ...recentBooks.filter((b: Book) => b.id !== book.id)].slice(0, 5);
    localStorage.setItem('recentBooks', JSON.stringify(recentBooks));
  
    window.open(book.pdfUrl, '_blank');
  }
  

  return (
    <div className="max-w-4xl mx-auto mt-8 px-4">
      <nav className='flex justify-between'>
        <Link href='/homepage' className='items-start'>Back</Link>
        <Link href='/revision'>Revision Materials</Link>
      </nav>
      <h1 className="text-3xl font-bold mb-4">Books</h1>
      {books.map((book) => (
        <div key={book.id} className="border rounded-lg border-gray-300 p-4 mb-4">
          <p className="text-xl font-semibold">{book.title}</p>
          <p className="text-gray-600">Author: {book.author}</p>
          <p className="text-gray-600">Year: {book.year}</p>
          <button
            onClick={() => openBook(book)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mt-2 inline-block"
          >
            View PDF
          </button>
        </div>
      ))}
    </div>
  );
}

export default Page;