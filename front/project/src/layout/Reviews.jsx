import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Reviews() {
  const { name } = useParams();
  const [restaurants, setRestaurants] = useState([]);
  const [input , setInput] = useState({
    comment : '' ,
  });

  const hdlChange = e => {
    setInput(prv => ({...prv , [e.target.name] : e.target.value}))
  }

  const hdlSubmit = async e => {
    try{
        e.preventDefault()
        const output = {...input}
        const token = localStorage.getItem('token')
        const rs = await axios.post(`http://localhost:8000/restaurants/${name}/reviews`, output , {
            headers : {Authorization : `Bearer ${token}`}
        })
        // alert(`ขอบคุณสำหรับการรีวิวร้าน ${output}`)
        console.log(`ขอบคุณสำหรับการรีวิวร้าน ${JSON.stringify(output)}`)
    }catch(err){
        console.log(err.message)
    }
  }


  useEffect(() => {
    const run = async () => {
      try {
        const rs = await axios.get(`http://localhost:8000/restaurants/${name}`);
        setRestaurants(rs.data.restaurants);
      } catch (err) {
        console.log(err);
      }
    };
    run();
  }, []);

  return (
    <div className="flex justify-center items-center mt-4">
      <div className="w-3/6 p-4 border-2">
        <div className="flex justify-between">
          <Link to={`/restaurants/${name}`}>
            <div className="card card-compact w-96 bg-base-100 shadow-xl ml-6 p-2">
              <figure>
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="flex justify-between mt-4 mr-4 ml-4">
                <h2 className="card-title">{restaurants.name}</h2>
                <h2 className="card-title">{restaurants.type}</h2>
              </div>
              <div className="rating rating-md  border-2 w-16 border-orange-400 bg-orange-200 ml-4 mt-1">
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                />
                <h2 className="card-title">5.0</h2>
              </div>
            </div>
          </Link>
          <form className="form-control border-2 mr-6 " onSubmit={hdlSubmit}>
            <div className="label">
              <span className="label-text font-black text-2xl">
                เขียนรายละเอียดรีวิว
              </span>
            </div>
            <textarea
              className="textarea textarea-success w-[400px] h-[200px] p-2 m-2 text-xl"
              placeholder="เขียนรายละเอียดรีวิวเกี่ยวกับร้านตามความรู้สึกของท่านที่มี 20 ตัวอักษรขึ้นไป"
              type="text"
              name="comment"
              value={input.comment}
              onChange={hdlChange}
            ></textarea>
            <div className="flex justify-center m-2">
              <button className="btn btn-warning w-[150px] m-2">บันทึก</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
