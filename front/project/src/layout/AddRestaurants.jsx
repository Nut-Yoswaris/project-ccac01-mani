import axios from "axios";
import { useState } from "react";

export default function AddRestaurants() {
  const [input, setInput] = useState({
    name: "",
    description: "",
    tal: "",
    restaurant_address: "",
  });

  const hdlChange = e => {
    setInput(prv => ({...prv , [e.target.name] : e.target.value}))
  }

  const hdlSubmit = async e => {
    try{
        e.preventDefault()
        const output = {...input}
        const token = localStorage.getItem('token')
        const rs = await axios.post("http://localhost:8000/restaurants" , output , {
            headers : {Authorization : `Bearer ${token}`}
        })
        alert("Create New OK")
    }catch(err){
        next(err.message)
    }
  }
  return (
    <form className="flex flex-col min-w-[600px] border rounded border-orange-400 w-5/6 mx-auto p-4 gap-6 m-5"
    onSubmit={hdlSubmit}>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">ระบุชื่อร้าน</span>
        </div>
        <input
          type="text"
          className="input input-bordered w-full"
          name="name"
          value={input.name}
          onChange={hdlChange}
        />
      </label>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">รายละเอียดของร้าน</span>
        </div>
        <input
          type="text"
          className="input input-bordered w-full"
          name="description"
          value={input.description}
          onChange={hdlChange}
        />
      </label>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">เบอร์โทรศัพท์</span>
        </div>
        <input
          type="text"
          className="input input-bordered w-full"
          name="tal"
          value={input.tal}
          onChange={hdlChange}
        />
      </label>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">ที่อยู่ของร้าน</span>
        </div>
        <input
          type="text"
          className="input input-bordered w-full"
          name="restaurant_address"
          value={input.restaurant_address}
          onChange={hdlChange}
        />
      </label>
      <button className="btn btn-warning">Secondary</button>
    </form>
  );
}
