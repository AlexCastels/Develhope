-- TABLE
CREATE TABLE Books (
    book_id INTEGER PRIMARY KEY, 
    title TEXT, 
    author TEXT,
    genre TEXT, 
    published_year INT, 
    isbn INT, price INT, 
    rating INT, 
    stock_count INT, 
    publisher_name TEXT, 
    pages INT
);

--per modificare dei valori in una table

UPDATE Books set price = 12.99 Where book_id = 2
UPDATE Books set stock_count = 4 Where book_id = 2
 
-- INDEX
 
-- TRIGGER
 
-- VIEW
 
