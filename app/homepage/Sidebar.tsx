'use client'
import Link from 'next/link'
import React from 'react'

function sidebar() {
  return (
    <div className='h-40 justify-center'>
        <BookCategory />
        <BooksRead />
        <SchoolCategory />
    </div>
  )
}

export default sidebar

function BookCategory(){
    return(
        <div className='bg-orange-200 h-1/3'>
            <Link href='/homepage/bookcategory'>
                Book Category
            </Link>
        </div>
    )
}
function BooksRead(){
    return(
        <div className='bg-blue-500 h-1/3'>
            <Link href='/homepage/booksread'>
                Books Read
            </Link>
        </div>
    )
}

function SchoolCategory(){
    return(
        <div className='bg-green-200 h-1/3'>
            <Link href='/homepage/schoolcategory'>
            School Category
            </Link>
        </div>
    )
}