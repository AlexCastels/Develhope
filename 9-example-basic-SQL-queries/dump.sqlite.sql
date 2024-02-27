-- TABLE
CREATE TABLE 'titanic' (
    'PassengerId' INTEGER,
    'Survived' INTEGER,
    'Pclass' INTEGER,
    'Name' TEXT,
    'Sex' TEXT,
    'Age' REAL,
    'SibSp' INTEGER,
    'Parch' INTEGER,
    'Ticket' TEXT,
    'Fare' REAL,
    'Cabin' TEXT,
    'Embarked' TEXT
);

--Display female passengers who survived and are older than 30
SELECT * FROM titanic WHERE sex = 'female' AND age > 30

--Find the average age of men who didn't survive.
SELECT AVG(age) FROM titanic WHERE survived = 0 AND sex = 'male'

--Display information for passengers who spent between $20 and $50 on their tickets and got on the ship at port 'C'." 
SELECT * FROM titanic WHERE fare > 20 And fare < 50 AND embarked = 'C'

--Find the total number of the survivors in the first class.
SELECT total(pclass) FROM titanic WHERE pclass = 1 AND survived = 1

--Show the information of passengers who boarded from Cherbourg (port 'C') and spent more than $75 on their tickets.".
SELECT * FROM titanic WHERE embarked = 'C' AND fare > 75

-- INDEX
 
-- TRIGGER
 
-- VIEW
 
