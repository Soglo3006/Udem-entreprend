from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

DATABASE_URL = os.getenv("DATABASE_URL")

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()
app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


DATABASE_URL = "postgresql://postgres:Soglo3006@localhost:5432/postgres"


engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(bind=engine)
Base = declarative_base()


class BenevoleDB(Base):
    __tablename__ = "benevoles"
    id = Column(Integer, primary_key=True, index=True)
    firstname = Column(String, nullable=False)
    lastname = Column(String, nullable=False)
    email = Column(String, nullable=False)
    programme = Column(String, nullable=True)
    message = Column(String, nullable=True)

Base.metadata.create_all(bind=engine)

class Benevole(BaseModel):
    firstname: str
    lastname: str
    email: str
    programme: Optional[str] = None
    message: Optional[str] = None

@app.post("/benevole")
async def recevoir_benevole(data: Benevole):
    db = SessionLocal()
    try:
        new_benevole = BenevoleDB(**data.dict())
        db.add(new_benevole)
        db.commit()
        db.refresh(new_benevole)
        return {"message": "Données enregistrées avec succès dans PostgreSQL"}
    except Exception as e:
        db.rollback()
        return {"error": str(e)}
    finally:
        db.close()
