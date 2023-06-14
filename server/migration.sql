DROP TABLE IF EXISTS cart;
DROP TABLE IF EXISTS records;

CREATE TABLE records (
  id SERIAL,
  album_name TEXT,
  artist_name TEXT,
  genre TEXT,
  price FLOAT,
  quantity INT
);

CREATE TABLE cart (
  id SERIAL,
  record_id INT,
  album_name TEXT,
  artist_name TEXT
);

INSERT INTO records(album_name, artist_name, genre, price, quantity) VALUES('The Hollow', 'Memphis May Fire', 'metal', 109.98, 3);
INSERT INTO records(album_name, artist_name, genre, price, quantity) VALUES('Manic', 'Wage War', 'metal', 52.50, 3);
INSERT INTO records(album_name, artist_name, genre, price, quantity) VALUES('Sempiternal', 'Bring Me The Horizon', 'metal', 29.02, 3);
INSERT INTO records(album_name, artist_name, genre, price, quantity) VALUES('New Demons', 'I See Stars', 'metal', 32.00, 3);

INSERT INTO records(album_name, artist_name, genre, price, quantity) VALUES('DiCaprio 2', 'JID', 'rap', 44.91, 3);
INSERT INTO records(album_name, artist_name, genre, price, quantity) VALUES('2014 Forest Hills Drive', 'J. Cole', 'rap', 49.98, 3);
INSERT INTO records(album_name, artist_name, genre, price, quantity) VALUES('Alternative Trap', 'LUCKI', 'rap', 35.00, 3);
INSERT INTO records(album_name, artist_name, genre, price, quantity) VALUES('WWCD', 'Griselda', 'rap', 230.00, 3);

INSERT INTO records(album_name, artist_name, genre, price, quantity) VALUES('DiCaprio 2', 'JID', 'pop', 44.91, 3);
INSERT INTO records(album_name, artist_name, genre, price, quantity) VALUES('2014 Forest Hills Drive', 'J. Cole', 'pop', 49.98, 3);
INSERT INTO records(album_name, artist_name, genre, price, quantity) VALUES('Alternative Tpop', 'LUCKI', 'pop', 35.00, 3);
INSERT INTO records(album_name, artist_name, genre, price, quantity) VALUES('WWCD', 'Griselda', 'pop', 230.00, 3);