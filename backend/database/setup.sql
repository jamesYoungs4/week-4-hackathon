DROP TABLE IF EXISTS entries;

CREATE TABLE entries (
    id INT GENERATED ALWAYS AS IDENTITY,
    date TIMESTAMP NOT NULL,
    category VARCHAR(50),
    text VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO entries (date, category, text) VALUES
    ('2015-07-22 08:45:25', 'regret', 'INSERT TEXT HERE')