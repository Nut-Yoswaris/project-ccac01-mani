import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Serach from "../component/Serach";

export default function Home() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const run = async () => {
      try {
        const rs = await axios.get("http://localhost:8000/restaurants/");
        setRestaurants(rs.data.restaurants);
      } catch (err) {
        console.log(err);
      }
    };
    run();
  }, []);


  return (
    <>
      <div className="grid justify-items-center">
        <div>
        <Serach key={restaurants.id} restaurant={restaurants}/>
        </div>
        <div className="border-2 p-4 text-black">
          <h1 className="font-black text-2xl">ร้านค้าแนะนำ</h1>
        </div>
        <div className="grid grid-cols-3 shadow-xl w-4/6 gap-3 m-4 p-4 border-2 border-orange-400">
          {restaurants.slice(0, 6).map((restaurant, idx) => (
            <Link to={`/restaurants/${restaurant.name}`} key={idx} className="hover:bg-red-600"> 
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
    </>
  );
}
