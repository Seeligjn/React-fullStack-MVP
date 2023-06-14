import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";

function Records({ records, handleAddToCart }) {
  // Group the records by genre
  const recordsByGenre = {};
  records.forEach((record) => {
    if (!recordsByGenre[record.genre]) {
      recordsByGenre[record.genre] = [];
    }
    recordsByGenre[record.genre].push(record);
  });

  return (
    <>
      {Object.keys(recordsByGenre).map((genre) => (
        <div key={genre} className="genre">
          <h1>{genre}</h1>
          {recordsByGenre[genre].map((record) => (
            <Card
              style={{ width: "18rem" }}
              key={record.id}
              border="secondary"
              bg="dark"
              text="white"
            >
              <Card.Img variant="top" src={record.album_image} />
              <Card.Body>
                <Card.Title>{record.artist_name}</Card.Title>
                <div>{record.album_name}</div>
                <div>
                  <strong>Price:</strong> ${record.price} |
                  <strong> Quantity: </strong>
                  {record.quantity}
                </div>
                <Button
                  variant="secondary"
                  className="addToCart"
                  onClick={() => handleAddToCart(record)}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      ))}
    </>
  );
}

export default Records;
