'use client';

import React, { useState, useEffect, useMemo } from 'react';
import db from '../../dbconnect';
import { collection, getDocs } from 'firebase/firestore';
import Link from 'next/link';
import Grades from './grades';
import Categories from './categories';

type Book = {
  id: string;
  title: string;
  author: string;
  year: string;
  category: string;
  form_year: number;
  pdfUrl: string;
};

function Page() {
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedForm, setSelectedForm] = useState<number | null >(null)

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
        if (fetchedData){
          console.log('Fetched Books:', fetchedData);
        }else {
          console.log("There is no fetched data")
        }
      } catch (error) {
        console.log(error);
      }
    };
    retrieveBooks();
  }, []);

  const openBook = (book: Book) => {
    console.log(book)
    let recentBooks = JSON.parse(localStorage.getItem('recentBooks') || '[]');
    recentBooks = [book, ...recentBooks.filter((recentBook: Book) => recentBook.id !== book.id)].slice(0, 5);
    localStorage.setItem('recentBooks', JSON.stringify(recentBooks));
  
    window.open(book.pdfUrl, '_blank');
  }
  
  const filteredBooks = useMemo(() => {
    if (selectedForm === null) {
      return books;}
    return books.filter((book) => book.form_year === selectedForm);
  },[selectedForm, books]);

  return (
    <div className="max-w-4xl mx-auto px-4 pt-8 sm:px-2 sm:pt-4">
      <nav className="flex flex-wrap justify-between m-8">
        <Link href='/homepage' className="border border-gray-500 px-2 py-2 rounded-sm w-full sm:w-auto mb-4 sm:mb-0">Back Home</Link>
        <Grades onSelect = {(form) => setSelectedForm(form)}/>
        <Categories />
        <Link href='/homepage/revision' className="border border-gray-500 px-2 py-2 rounded-sm w-full sm:w-auto mb-4 sm:mb-0 mt-4">Revision Materials</Link>
      </nav>
      <h1 className="text-3xl font-bold m-4">Books</h1>
      {filteredBooks.map((book) => (
        <div key={book.id} className="border border-gray-300 m-4 rounded-md gap-4 md:grid-cols-2 lg:grid-cols-3
        ">
          <div className='flex flex-col justify-center items-center m-4'>
            <p className="text-xl font-semibold">{book.title}</p>
            <p className="text-gray-600">Author: {book.author}</p>
            <p className="text-gray-600">Published: {book.year}</p>
          
          <button
            onClick={() => openBook(book)}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mt-2 inline-block"
          >
            View PDF
          </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Page;