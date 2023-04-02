import { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const items = [
  {
    id: 1,
    name: 'Item 1',
    description: 'This is the description for item 1',
    currentBid: 10,
    timeLeft: 10000 // milliseconds
  },
  {
    id: 2,
    name: 'Item 2',
    description: 'This is the description for item 2',
    currentBid: 20,
    timeLeft: 20000 // milliseconds
  },
  {
    id: 3,
    name: 'Item 3',
    description: 'This is the description for item 3',
    currentBid: 30,
    timeLeft: 30000 // milliseconds
  },
];

const Auction = () => {
  const [search, setSearch] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [bidAmount, setBidAmount] = useState('');

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    setBidAmount(item.currentBid + 1); // set the default bid amount to be one higher than the current bid
  };

  const handleBid = () => {
    // Send a bid to the server
    console.log(`Bid of ${bidAmount} placed on item ${selectedItem.id}`);
  };

  return (
    <Container>
      <Row className="my-3">
        <Col>
          <Form.Control type="text" placeholder="Search for an item" value={search} onChange={handleSearch} />
        </Col>
      </Row>
      <Row>
        {items
          .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
          .map((item) => (
            <Col xs={12} sm={6} md={4} lg={3} key={item.id}>
              <Card className="mb-3" onClick={() => handleSelectItem(item)} style={{ cursor: 'pointer' }}>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">${item.currentBid}</Card.Subtitle>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
      {selectedItem && (
        <Row className="mt-3">
          <Col>
            <h2>{selectedItem.name}</h2>
            <p>{selectedItem.description}</p>
            <p>Time Left: {Math.floor(selectedItem.timeLeft / 100)} seconds</p>
            <Form.Group>
              <Form.Control type="number" placeholder="Bid Amount" value={bidAmount} onChange={(e) => setBidAmount(e.target.value)} />
            </Form.Group>
            <Button variant="primary" onClick={handleBid}>Place Bid</Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Auction;
