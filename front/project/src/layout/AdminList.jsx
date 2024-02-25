import axios from "axios";
import { useEffect, useState } from "react";
import ListRestaurants from "../component/ListRestaurants";

export default function UserHome (props) {
    const [restaurants, setRestaurants] = useState([]);
    const [trigger , setTrigger] = useState(false)
    useEffect(() => {
      const run = async () => {
          try{
          const rs = await axios.get("http://localhost:8000/restaurants/") ; 
          console.log(rs);
          setRestaurants(rs.data.restaurants)
          }catch(err){
            console.log(err)
          }
      };
      run()
    },[trigger])

  return (
<div className="grid justify-items-center">
<div className="border-2 border-red-200 m-4">
      <div className="grid grid-cols-3 p-4">
        {restaurants.map((el) => (
          <ListRestaurants key={el.id} el={el} setTrigger={setTrigger}/>
        ))}
    </div>
</div>
</div>
  )
}
