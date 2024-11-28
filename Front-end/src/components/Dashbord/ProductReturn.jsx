import React from "react";

function ProductReturn() {
 return (
  <div className=" w-full mx-auto px-2">
   <h2 className="text-2xl font-semibold mb-6 border-b pb-4 border-teal-500 ">ثبت مرجوعی</h2>
   <p>جهت مرجوع کالا، ابتدا کد سفارش خود را وارد کرده و در کادر بررسی محصول مورد نظر را انتخاب کنید</p>

   <div className=" mt-4 max-w-lg mx-auto flex flex-col items-center">
    <label className="block text-gray-600 mb-1"></label>
    <input type="text" placeholder="12345678" className="w-full px-4 py-2 rounded-full bg-teal-50 border border-teal-200 focus:outline-none" />
   <button className="mt-8 px-6 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600 focus:outline-none">برسی محصول</button>
   </div>

  </div>
 );
}

export default ProductReturn;