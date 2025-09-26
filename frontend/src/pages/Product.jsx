import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

function Product() {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState([]);
  const [size, setSize] = useState([]);

  const fetchProductData = async () => {
    products.find((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        console.log(item);
        return null;
      }
    });
  };
  useEffect(() => {
    fetchProductData();
  }, [productId]);
  console.log(productId);

  return (
    <div>
      {productData ? (
        <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
          <div className="flex gap-5 sm:gap-12 flex-col sm:flex-row">
            {/* Product Images */}
            <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
              <div className="flex flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
                {productData.image.map((item, index) => (
                  <img
                    onClick={() => setImage(item)}
                    src={item}
                    key={index}
                    className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                  />
                ))}
              </div>
              <div className="w-full sm:w-[80%]">
                <img className="w-full h-auto" src={image} alt="" />
              </div>
            </div>
            {/* ----product info------ */}
            <div className="flex-1">
              <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
              <div className="flex items-center gap-1 mt-2">
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_dull_icon} alt="" className="w-3 5" />
                <p className="pl-2">(122)</p>
              </div>
              <p className="mt-5 text-3xl font-medium">{currency}{productData.price}</p>
              <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
              <div className="flex flex-col gap-4 my-8">
                <p>Select Size</p>
                <div className="flex gap-2">
                  {productData.sizes.map((item, index)=>(
                    <button onClick={()=>setSize(item)} className={`cursor-pointer border border-gray-100  py-2 px-4 bg-gray-100 ${item===size ?'border-orange-500':''}`} key={index}>{item}</button>
                  ))}
                </div>
              </div>
              <button className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 cursor-pointer">ADD TO CART</button>
              <hr className="mt-8 sm:w-4/5" />
              <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
                <p>100% Original Product</p>
                <p>Cash on delivery is available on this product.</p>
                <p>Easy return and exchange policy with in 7 days.</p>
              </div>
            </div>
          </div>
          {/* Description section  */}
          <div className="mt-20">
            <div className="flex ">
              <b className="border px-5 border-r-0 border-b-0 py-3 text-sm">Description</b>
              <p className="border px-5 border-b-0 py-3 text-sm">Text Reviews(122)</p>
            </div>
            <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500 ">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti doloribus magni quo quia voluptate. Praesentium inventore nisi provident quidem nam earum accusantium distinctio dolorum sint dolorem error optio sunt incidunt tempora sit in, possimus eos reiciendis quod asperiores officia consequuntur id aspernatur quae. Qui autem voluptas ex, pariatur sapiente ullam.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste odio id provident eligendi alias, et dolores omnis! Odit, distinctio inventore unde facere voluptas, soluta eius, ratione similique sed quibusdam nemo ad voluptate magni rem tempore enim suscipit magnam aliquid libero. Eligendi placeat eius recusandae dolores. Doloremque consequuntur architecto est consequatur!</p>
            </div>
          </div>
          {/* display related products */}
          <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
        </div>
      ) : (
        <p className="opacity-0">Loading....</p>
      )}
    </div>
  );
}

export default Product;
