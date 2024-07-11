import Link from 'next/link'
import React from 'react'
import profile from '../Photos/profile.png'
import Image from 'next/image'

function Profile() {
  return (
    <div className='flex flex-col items-center'>
        <Image src={profile} alt='image' width={300} height={300} className='w-52 h-52'/>
        <p>Tonny Blair Nyauke</p>
        <p>Grade 8</p>
        <p>Admission Number: 9792</p>
        <Link href='#' className='text underline'>Reset Password</Link>
    </div>
  )
}

export default Profile