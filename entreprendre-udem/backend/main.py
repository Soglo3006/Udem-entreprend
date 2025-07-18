from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
import psycopg2
import os
from dotenv import load_dotenv

load_dotenv(encoding='utf-8')

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Benevole(BaseModel):
    firstname: str
    lastname: str
    email: str
    programme: Optional[str] = None
    message: Optional[str] = None


conn = psycopg2.connect(
    host=os.getenv("DB_HOST"),
    database=os.getenv("DB_NAME"),
    user=os.getenv("DB_USER"),
    password=os.getenv("DB_PASSWORD"),
    port=os.getenv("DB_PORT"),
)

@app.post("/benevole")
async def recevoir_benevole(data: Benevole):
    cur = conn.cursor()
    cur.execute(
        """
        INSERT INTO benevoles (firstname, lastname, email, programme, message)
        VALUES (%s, %s, %s, %s, %s)
        """,
        (data.firstname, data.lastname, data.email, data.programme, data.message)
    )
    conn.commit()
    cur.close()
    return {"message": "Données enregistrées avec succès !"}
