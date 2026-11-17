import Image from 'next/image'
import React from 'react'

export const metadata = {
  title: "My First Website",
  description: "Welcome to my website",
};

export default function Home() {
  return (
    <div>
      <Image  
      src="/dog1.jpeg"
      alt="Dog"
      width={300}
      height={200}/>
    </div>
  )
}
