import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ListRestaurants(props) {
  const { el, setTrigger } = props;
  // console.log(name)

  const hdlDelete = async (e) => {
    try {
      e.stopPropagation();
      const token = localStorage.getItem("token");
      let rs = await axios.delete(
        `http://localhost:8000/restaurants/${el.id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert("Delete Seccessful");
      setTrigger((prv) => !prv);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="grid grid-cols-3 w-[450px] gap-2 m-4 p-4 shadow-xl border-1 border-orange-400 ">
      <div className="grid grid-cols-2">
        <div className="gap-3 w-[200px] grid border-2">
          <h2 className="font-size-30">{el.name}</h2>
          <hr />
          <h2 className="">{el.type}</h2>
        </div>
        <div className="grid grid-cols-1 gap-2 w-[350px] justify-items-end">
          <Link to={`/restaurants/edit/${el.id}`}>
          <button className="btn btn-warning">แก้ไข</button>
          </Link>
          <button className="btn btn-warning" onClick={hdlDelete}>ลบ</button>
        </div>
      </div>
    </div>
  );
}
