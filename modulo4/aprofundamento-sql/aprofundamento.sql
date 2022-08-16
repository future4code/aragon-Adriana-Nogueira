CREATE TABLE `Projeto` (
	id INT PRIMARY KEY,
  	nome VARCHAR(255) NOT NULL,
  	title VARCHAR(255) NOT NULL,
  	date DATE NOT NULL
);

INSERT INTO Projeto (id, nome, title, date)
VALUES ("001", "Labefy","LFy","2024-01-06");

INSERT INTO Projeto (id, nome, title, date)
VALUES ("002", "Labefy","LFy","2024-01-06");

INSERT INTO Projeto (id, nome, title, date)
VALUES ( "003", "AstroZoom", "AZm", "2022-02-15");

DESCRIBE `Projeto`;

ALTER TABLE Projeto
CHANGE date dueDate DATE NOT NULL;

ALTER TABLE Projeto
DROP COLUMN title;
DESCRIBE `Projeto`;

DESCRIBE `Pessoas`;

ALTER TABLE Pessoas
MODIFY email  VARCHAR(255) NOT NULL UNIQUE;

DESCRIBE `Pessoas`;

ALTER TABLE Projeto
ADD description VARCHAR(255) NOT NULL;

UPDATE Projeto
SET description = "Projeto de sistema em nuvem da Labenu."
WHERE id = "001";

UPDATE Projeto
SET description = "Projeto de sistema de gerenciamento de músicas da Labenu."
WHERE id = "002";

UPDATE Projeto
SET description = "Projeto de rede de comunicação da Labenu."
WHERE id = "003";

SELECT *
FROM Projeto
ORDER BY dueDate ASC;

SELECT nome, dueDate
  FROM Projeto
  ORDER BY dueDate ASC
  LIMIT 2;