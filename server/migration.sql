DROP TABLE IF EXISTS cart;
DROP TABLE IF EXISTS records;

CREATE TABLE records (
  id SERIAL,
  album_name TEXT,
  artist_name TEXT,
  genre TEXT,
  price FLOAT,
  quantity INT,
  album_image TEXT
);

CREATE TABLE cart (
  id SERIAL,
  record_id INT,
  album_name TEXT,
  artist_name TEXT
);

INSERT INTO records(album_name, artist_name, genre, price, quantity, album_image) VALUES('The Hollow', 'Memphis May Fire', 'metal', 109.98, 3, 'https://i.discogs.com/iqe7Q0IlZBcv-jeAD6lWS4iwRVaXUo9bFp_c-Ak1l5E/rs:fit/g:sm/q:90/h:450/w:450/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU5NTIx/ODEtMTQwNzIyMjY4/NC04MzY4LmpwZWc.jpeg');
INSERT INTO records(album_name, artist_name, genre, price, quantity, album_image) VALUES('Manic', 'Wage War', 'metal', 52.50, 9, 'https://f4.bcbits.com/img/a2836165278_10.jpg');
INSERT INTO records(album_name, artist_name, genre, price, quantity, album_image) VALUES('Sempiternal', 'Bring Me The Horizon', 'metal', 29.02, 6, 'https://i.discogs.com/JZ6lZaH7RKZNjlY-UwxfL7wjhzGHXs4JsmMQ4kEJUtg/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYzOTMy/NDItMTQxODEzMTQ5/NC02OTE5LmpwZWc.jpeg');
INSERT INTO records(album_name, artist_name, genre, price, quantity, album_image) VALUES('New Demons', 'I See Stars', 'metal', 32.00, 1, 'https://cdn.shopify.com/s/files/1/1487/2138/products/ISS_NEW_DEMONS_CD_NEW_720x.jpg?v=1475196379');

INSERT INTO records(album_name, artist_name, genre, price, quantity, album_image) VALUES('DiCaprio 2', 'JID', 'rap', 44.91, 5, 'https://upload.wikimedia.org/wikipedia/en/2/27/DiCaprio2ALT.jpg');
INSERT INTO records(album_name, artist_name, genre, price, quantity, album_image) VALUES('2014 Forest Hills Drive', 'J. Cole', 'rap', 49.98, 4, 'https://m.media-amazon.com/images/I/71v0b7YG+zL._SL1500_.jpg');
INSERT INTO records(album_name, artist_name, genre, price, quantity, album_image) VALUES('Alternative Trap', 'LUCKI', 'rap', 35.00, 11, 'https://upload.wikimedia.org/wikipedia/en/7/70/Lucki-Ecks-Alternative-Trap.jpg');
INSERT INTO records(album_name, artist_name, genre, price, quantity, album_image) VALUES('WWCD', 'Griselda', 'rap', 230.00, 7, 'https://media.pitchfork.com/photos/5de6869ec43b7100080dda6b/1:1/w_320,c_limit/wwcd.jpg');
