import express from "express";
import postgres from "postgres";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const PORT = process.env.PORT;
const sql = postgres(process.env.DATABASE_URL);
const app = express();

app.use(express.json());

app.get("/api/records", (req, res) => {
  sql`SELECT * FROM records`.then((rows) => {
    res.send(rows);
  });
});

app.get("/api/cart", (req, res) => {
  sql`SELECT * FROM cart`.then((rows) => {
    res.send(rows);
  });
});

app.post("/api/cart", (req, res) => {
  const { album_name, artist_name } = req.body;

  sql`
    INSERT INTO cart (album_name, artist_name)
    VALUES (${album_name}, ${artist_name})
    RETURNING *
  `
    .then((rows) => {
      res.send(rows[0]);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Internal Server Error");
    });
});

app.delete("/api/cart/:id", (req, res) => {
  const id = req.params.id;

  sql`
    DELETE FROM cart WHERE id = ${id}
    RETURNING *
  `
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Internal Server Error");
    });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
