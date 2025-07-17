CREATE TABLE benevoles (
  id SERIAL PRIMARY KEY,
  nom VARCHAR(100),
  prenom VARCHAR(100),
  email VARCHAR(100),
  telephone VARCHAR(20),
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
