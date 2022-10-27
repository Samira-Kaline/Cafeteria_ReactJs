import Food from "./Food";

function App() {
  const foods = [{
    id : 0,
    name : "Hambúrguer",
    image : "imgs/hamburguer.jpg"
  },
  {
    id : 1,
    name : "Suco",
    image : "imgs/suco.jpg"
  },
  {
    id : 2,
    name : "Café",
    image : "imgs/café.jpg"
  },
  {
    id : 3,
    name : "Sanduíche",
    image : "imgs/sanduiche.jpg"
  },
  {
    id : 4,
    name : "Café Mocca",
    image : "imgs/cafemocca.jpg"
  },

];

  return (
    <div className="container">
      <h1>Menu</h1>
      <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">+</button>

      <section className="card-deck my-3">
        {foods.map((food) => (
          <Food food={food} key={food.id}/>
        ))}
      </section>

    </div>

  );
}

export default App;
