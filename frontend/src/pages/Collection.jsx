import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "../components/ProductItem";
import { assets } from "../assets/assets";
import Title from "../components/Title";

function Collection() {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const toggleFilter = ()=>{
    setShowFilter(!showFilter);
  }
  const [filterProducts, setFilterProducts] = useState([]);
  useEffect(()=>{
    setFilterProducts(products)
  },[products])

  // filter logic
  const[category, setCategory] = useState([]);
  const[subcategory, setSubcategory] = useState([]);

  const toggleCategory = (e)=>{
    if(category.includes(e.target.value)){
      setCategory((prev)=> prev.filter(item => item !== e.target.value))
    } else{
      setCategory((prev) => [...prev, e.target.value])
    }
  }

  //it is used to display the console log of clicked filter
  // useEffect(()=>{
  //   console.log(category)
  //   console.log(subcategory)
  // },[category, subcategory])

  const toggleSubCategory = (e)=>{
    if(subcategory.includes(e.target.value)){
      setSubcategory((prev)=> prev.filter(item => item !== e.target.value))
    }else{
      setSubcategory((prev)=>[...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice();
    if(category.length>0){
      productsCopy = productsCopy.filter(item=>category.includes(item.category));
    }

  if(subcategory.length > 0){
    productsCopy = productsCopy.filter(item => subcategory.includes(item.subCategory));
  }

    setFilterProducts(productsCopy)
  }
  useEffect(()=>{
    applyFilter();
  },[category, subcategory])

  //logic for sort product
  const sortProduct = () =>{
    let fpCopy = filterProducts.slice()
    switch (sortType){
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
        break;
      default:
      applyFilter();
      break
    }
  }
  const[sortType, setSortType] = useState('relavent')

  useEffect(()=>{
    sortProduct()
  },[sortType])
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">

      {/** Filter Option */}
      <div className="min-w-60">
        <p onClick={toggleFilter} className="my-2 text-xl flex items-center cursor-pointer gap-2"> FILTERS
          <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter ?'rotate-90':''}`} alt="" />

        </p>
        
        {/**Category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' :'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Men'} onChange={toggleCategory} />Men
            </p>
                        <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Women'} onChange={toggleCategory}  />Woman
            </p>
                        <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Kids'} onChange={toggleCategory}  />Kids
            </p>
          </div>
        </div>
        {/** Subcategory filter */}
         <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' :'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Topwear'} onChange={toggleSubCategory} />Topwear
            </p>
                        <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory}/>Bottomwear
            </p>
                        <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Winterwear'} onChange={toggleSubCategory} />Winterwear
            </p>
          </div>
        </div>
      </div>
      {/** Right side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={'ALL'} text2={'COLLECTIONS'}/>
          {/* Product sort */}
          <select onChange={(e)=>setSortType(e.target.value)} className="border border-gray text-sm sm:px-2 px-1">
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to high</option>
            <option value="high-low">Sort by: High to low</option>
          </select>
        </div>
        {/* Map products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {
            filterProducts.map((item, index)=>(
              <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Collection;
