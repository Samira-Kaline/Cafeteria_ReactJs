import Food from "./Food";
import { useRef, useState } from "react";
import data from '../models/foods';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

function App() {
  const [foods, setFoods] = useState(data);
  const buttonAdd = useRef(null);

  const handleClick = () =>{
    const food ={
      id : 4,
      name : "Café Mocca",
      image : "imgs/cafemocca.jpg"
    };

    setFoods([...foods,food]);

    buttonAdd.current.disabled = true;
  }

  return (
    <div className="container">
      <h1>Menu</h1>
      <button type="button" className=" btn btn-secondary round-circle mr-4 font-weight-bold" onClick={handleClick}
      ref={buttonAdd}>+</button>

      <section className="card-deck my-3">
        {foods.map((food) => (
          <Food food={food} key={food.id}/>
        ))}
      </section>

    </div>

  );
}

export default App;
