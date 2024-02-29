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


INSERT INTO Books (book_id , title , author , genre , published_year , isbn , price , rating , stock_count , publisher_name , pages)
VALUES
(1, "A Journey to the Center" , 'Jules Verne' , 'Adventure' , 1864 , 1234567890123 , 12.99 ,  4.5 , 10 , 'Verne Publishing' , 350) , 
(2 , "War and Peace" , 'Leo Tolstoy' , 'Historical' , 1869 , 1234567890124 , 14.99 , 4.8 , 5 , 'Tolstoy Prints' , 1200)
(3 , "Whispers of the Wind" , 'Amelia Blackburn' , 'Romance' , 1982 , 1234567890125 , 9.99 , 4.2 , 20 , 'Blackburn House' , 275) ,
(4 , "The Galactic Odyssey" , 'Orion Starfield' , 'Fiction' ,  2005 , 1234567890126 , 19.99 , 4.9 , 15 , 'Nebula Press' , 450) 

-- INDEX
 
-- TRIGGER
 
-- VIEW
 
