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
              <Card.Img
                variant="top"
                src="https://i.discogs.com/iqe7Q0IlZBcv-jeAD6lWS4iwRVaXUo9bFp_c-Ak1l5E/rs:fit/g:sm/q:90/h:450/w:450/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU5NTIx/ODEtMTQwNzIyMjY4/NC04MzY4LmpwZWc.jpeg"
              />
              <Card.Body>
                <Card.Title>{record.artist_name}</Card.Title>
                <div>{record.album_name}</div>
                <div>
                  <strong>Price:</strong> {record.price} |
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
