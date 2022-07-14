CREATE TABLE
  `Lista_Usuario` (
    `id` INT PRIMARY KEY,
    `nome` varchar(255) NOT NULL,
    `email` varchar(255) NOT NULL UNIQUE,
   
  );
  
  INSERT INTO `Lista_Usuario` (id, nome, email)
VALUES ("003", "Beltrano", "beltrano@gmail.com");

SELECT * FROM `Lista_Usuario`;

SELECT id AS `identifier`, nome FROM `Lista_Usuario`;

SELECT * FROM `Lista_Usuario` WHERE nome LIKE "%a%";

SELECT * FROM `Lista_Usuario` WHERE NOT  nome LIKE "%r%" AND LIKE "%u%";

INSERT INTO `Lista_Usuario` (id, nome, email)
VALUES ("004", "yUZO", "yuzo@gmail.com");

DELETE FROM `Lista_Usuario`
WHERE id = "004"
