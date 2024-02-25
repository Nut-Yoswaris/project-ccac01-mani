import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Serach(props) {
  const {restaurant} = props
  const [ search , setSearch] = useState('')
  const [filterRes , setFilterRes] = useState([])
  // console.log(restaurant)

  const hdlChange = e => {
    setSearch (e.target.value)
  }

  // กรองการค้นหา 
  const hdlSubmit = e => {
    e.preventDefault();
    const filterRes = restaurant.filter(res => {
      return res.name.toLowerCase().includes(search.toLowerCase())
    })
    setFilterRes(filterRes)
  }

  return (
   <div className='grid justify-items-center m-3 p-3 border-t-2 border-b-2'>
<div class="mb-3">
  <div class="relative  flex w-[500px] flex-wrap items-stretch">
    <input
      type="search"
      class="relative m-0 block min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
      placeholder="ชื่อร้านที่ต้องการค้นหา"
      aria-label="Search"
      aria-describedby="button-addon2" 
      value={search}
      onChange={hdlChange} 
      />
    <button
      class="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200 border-2 border-orange-400 bg-orange-400"
      id="basic-addon2" onClick={hdlSubmit}> 
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
          clip-rule="evenodd" />
      </svg>
    </button>
  </div>
</div>
<div className="grid grid-cols-3 shadow-xl w-4/6 gap-3 m-4 p-4 border-2 border-orange-400">
          {(search === '' ? restaurant.slice(0,3) : filterRes.slice(0, 3)).map((restaurant, idx) => (
            <Link to={`/restaurants/${restaurant.name}`}  className="hover:bg-red-600"> 
              <div key={idx} className="shadow-xl border-2 rounded-2xl">
              <div className="card-body border-2 border-orange-400 p-4 rounded-2xl">
                <figure>
                  <img
                    src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div>
                  <div className="flex justify-between">
                    <h2 className="card-title ">{restaurant.name}</h2>
                    <h2 className="card-title">{restaurant.type}</h2>
                  </div>
                </div>
                  <div className="rating rating-md p-1 border-2 w-16 border-orange-400 bg-orange-200 ">
                    <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400"/>
                    <h2 className="card-title">5.0</h2>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
  )
}
