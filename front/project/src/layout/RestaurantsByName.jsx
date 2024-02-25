import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function RestaurantsByName() {
  const { name } = useParams();
  const [restaurants, setRestaurants] = useState([]);

  

  useEffect(() => {
    const run = async () => {
      try {
        const rs = await axios.get(`http://localhost:8000/restaurants/${name}`);
        // console.log(rs)
        setRestaurants(rs.data.restaurants);
      } catch (err) {
        console.log(err);
      }
    };
    run();
  }, []);

  return (
    <div className="flex justify-center items-center ">
      <div className="w-4/6 p-4">
        <div className=" rounded-box m-6 w-4/6 p-4">
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
              alt="Drink"
            />
            <img
              src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
              alt="Drink"
            />
            <img
              src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
              alt="Drink"
            />
            <img
              src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
              alt="Drink"
            />
          </div>
        </div>
        <div className="border-2 border-orange-400 w-full m-6 gird grid-rows-2 p-1 flex">
          <div className="border-2 border-red-800 m-2 flex flex-col w-3/5">
            <div className="font-black text-3xl p-3 m-2 border-2">{restaurants.name}</div>
            <div className="font-black text-xl p-3 border-2 m-2 w-[130px]">4.7 Rating</div>
            <div className="flex justify-between p-2 border-2 m-2">
            <div className="border-2 w-3/5  text-xl p-4">{restaurants.description}</div>
            <div className="border-2 w-1/5 font-black text-xl p-4 text-center">status</div>
            </div>
          </div>
          <div className="border-2 border-red-800 m-2 flex flex-col w-2/5 ">
            <div className="m-3">
              <h2 className="font-black text-xl">เวลาเปิดร้าน</h2>
            </div>
            <div className="flex border-2 m-2">
            <h3>วันจันทร์ - อาทิตย์</h3>
            <h3>17:00 - 23:00 น.</h3>
            </div>
          </div>
        </div>
        <div className="border-2 border-red-800 m-6 p-2 w-2/5 ">
        <div className=" flex justify-between">
        <Link to={`/restaurants/${name}/reviews`}>
        <button className="btn btn-warning w-[150px]">เขียนรีวิว</button>
        </Link>
        <Link to={`/restaurants/${name}/photos`}>
        <button className="btn btn-warning w-[150px]">เพิ่มรูปภาพ</button>
        </Link>
        <button className="btn btn-warning w-[150px]">ร้านโปรด</button>
        </div>
        </div>
      </div>
    </div>
  );
}
