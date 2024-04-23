'use client';

import React, { useEffect, useState } from 'react';
import db from '../../dbconnect';
import { collection, getDocs } from 'firebase/firestore';

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
  const [selectedPdfUrl, setSelectedPdfUrl] = useState<string | null>(null);

  useEffect(() => {
    const retrieveBooks = async () => {
      try {
        const fetchedData: Book[] = [];

        // Fetch all books from Firestore
        const booksCollection = collection(db, 'Books');
        const snapshot = await getDocs(booksCollection);

        // Extract books data
        snapshot.forEach((booksDoc) => {
          fetchedData.push({ ...booksDoc.data(), id: booksDoc.id } as Book);
        });

        // Update state with fetched data
        setBooks(fetchedData);
      } catch (error) {
        console.log(error);
      }
    };
    retrieveBooks();
  }, []);

  const handlePdfView = (pdfUrl: string) => {
    setSelectedPdfUrl(pdfUrl);
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-4">Books</h1>
      {books.map((book) => (
        <div key={book.id} className="border rounded-lg border-gray-300 p-4 mb-4">
          <p className="text-xl font-semibold">{book.title}</p>
          <p className="text-gray-600">Author: {book.author}</p>
          <p className="text-gray-600">Year: {book.year}</p>
          <button
            onClick={() => handlePdfView(book.pdfUrl)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mt-2"
          >
            View PDF
          </button>
        </div>
      ))}
      {selectedPdfUrl && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-gray-900 bg-opacity-50 absolute inset-0 z-50"></div>
          <div className="bg-white p-4 rounded-lg max-w-lg w-full z-50 relative">
            <embed src={selectedPdfUrl} type="application/pdf" width="100%" height="550px" />
            <button
              onClick={() => setSelectedPdfUrl(null)}
              className="bg-red-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-red-600 absolute bottom-4 right-4"
            >
              Close PDF
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
