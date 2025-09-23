import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';

const SearchBar=()=> {
    const { search, setSearch, showSearch, SetShowSearch} = useContext(ShopContext);
  return showSearch ? (
    <div className='border-t border-b bg-gray-50 text-center'>
        <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 rounded-full w-3/4 sm:w-1/2 mx-3">
        <input value={search} onChange={(e)=>setSearch(e.target.value)}  className='flex-1 outline-none bg-inherit text-sm' type="text" placeholder='search' />
        <img src={assets.search_icon} className='w-4' alt="" />
        </div>
        <img onClick={()=>SetShowSearch(false)} className='inline w-3 cursor-pointer' src={assets.cross_icon} alt="" />
      
    </div>
  ):null
}

export default SearchBar
