import Food from "./Food";
import { useRef, useState } from "react";
import data from '../models/foods';
import { Button,Row,Container } from 'react-bootstrap';

function Foods() {
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
    <Container>
      <h1 className="mt-5 text-center">Menu</h1>
        <div className="text-end mb-2">
        <Button  
        variant="secondary" 
        className="rounded-circle mr-4 font-weight-bold" 
        onClick={handleClick}
        ref={buttonAdd}
        >+</Button>
      </div>      
      <Row  xs={1} md={2} className="g-4 align-self-stretch">
        {foods.map((food) => (
          <Food food={food} key={food.id}/>
        ))}
      </Row>

    </Container>

  );
}

export default Foods;
