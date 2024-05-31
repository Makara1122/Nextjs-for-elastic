'use client'
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { words } from '@/libs/data'

export default function SearchBarComponent() {

  const [activeSearch,setActiveSearch] = useState([])

  const handleSearch = (e) => {
    if(e.target.value == '') {
      setActiveSearch([])
      return false
    }
    setActiveSearch(words.filter(w => w.includes(e.target.value.toLowerCase())).slice(0,8))
  }

  return (
    <form className='w-[440px] relative'>
      <div className="relative">
        <input type="search" placeholder='Type Here' className='text-white w-full p-4 rounded-full bg-slate-800' onChange={(e) => handleSearch(e)} />
        <button className='absolute right-1 top-1/2 -translate-y-1/2 p-4 rounded-full bg-slate-900'>
        <FaSearch color='white'  />
        </button>
      </div>

      {
        activeSearch.length > 0 && (
          <div className='absolute top-20 p-4 bg-slate-800 text-white   w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col   gap-2 '>
            {
              activeSearch.map(s => (
                <span>{s}</span>
              ))
            }

          </div>
        )
      }

      
    </form>
  )
}
