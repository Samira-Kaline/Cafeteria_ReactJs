import { Card,Col } from 'react-bootstrap';

function Food({food}){
  return (
    <Col sm="6" lg="4" xl="3" className="mb-3">
          <Card>
            <Card.Header className="text-center font-weight-bold">
              <span>{food.name}</span>
            </Card.Header>
            <Card.Body className="p-0">
              <img src={food.image} 
                alt={food.name} 
                className="style w-100 h-200"
                style={{width: 100, height: 200}}/>
            </Card.Body>
          </Card>
        </Col>
  );

}
export default Food;