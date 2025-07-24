'use client';

import Link from 'next/link';
import React from 'react'
import { useState } from 'react'

const page = () => {
  const [url, setUrl] = useState("")
    const [shorturl, setShortUrl] = useState("")
    const [generated, setgenerated] = useState("")

    const generate = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        const raw = JSON.stringify({ 
            "url": url, 
            "shorturl": shorturl 
        });
        const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            if(result.success){
                setUrl("");
                setShortUrl("");
                setgenerated(`${process.env.NEXT_PUBLIC_URL}/${result.shortUrl}`);
            }
            console.log(result)
            alert(result.message);
        })
        .catch((error) => console.error(error));
    }


  return (
      <div className="min-h-[calc(100vh-52px)] flex gap-2 flex-col items-center justify-start pt-4 bg-green-50">
        <h1 className="text-4xl font-bold">Shorten Your URL</h1>
        <p className="text-lg">Enter your URL below to get started</p>
        <input onChange={(e)=>{setUrl(e.target.value)}} type="text" className="border bg-white border-green-800 p-2 rounded-lg w-full max-w-md" value={url} placeholder="Enter your URL" />
        <input onChange={(e)=>{setShortUrl(e.target.value)}} type="text" className="border bg-white border-green-800 p-2 rounded-lg w-full max-w-md" value={shorturl} placeholder="Enter your preferred short URL" />
        <button onClick={generate} className="cursor-pointer px-4 py-2 bg-green-800 text-white rounded-lg hover:bg-green-600 transition duration-300">Generate</button>
        {generated && <><span className='font-bold'>Your Link:</span><code><Link target="_blank" href={generated}>{generated}</Link></code></>}
    </div>
  )
}

export default page
