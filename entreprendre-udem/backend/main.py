from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
import os

DATABASE_URL = os.getenv("DATABASE_URL") or "postgresql://postgres.fgoxhyxuhvmkqgpimxet:vqeLiwhfOfGT0VuE@aws-1-ca-central-1.pooler.supabase.com:6543/postgres"
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()
SENDGRID_API_KEY = os.getenv("SENDGRID_API_KEY")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://udementreprend.netlify.app","http://localhost:5173","https://udementreprend.ca"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class BenevoleDB(Base):
    __tablename__ = "benevoles"
    id = Column(Integer, primary_key=True, index=True)
    firstname = Column(String, nullable=False)
    lastname = Column(String, nullable=False)
    email = Column(String, nullable=False)
    programme = Column(String, nullable=True)
    message = Column(String, nullable=True)
    
class FeedbackDB(Base):
    __tablename__ = "feedback"
    id = Column(Integer, primary_key=True, index=True)
    type = Column(String, nullable=False)
    message = Column(String, nullable=False)
    
class InfolettreDB(Base):
    __tablename__ = "infolettre"
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, nullable=False)

Base.metadata.create_all(bind=engine)

class Benevole(BaseModel):
    firstname: str
    lastname: str
    email: str
    programme: Optional[str] = None
    message: Optional[str] = None
    
class Feedback(BaseModel):
    type: str
    message: str
    
class Infolettre(BaseModel):
    email: str

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
        
@app.post("/feedback")
async def recevoir_feedback(data: Feedback):
    db = SessionLocal()
    try:
        newfeedback = FeedbackDB(**data.dict())
        db.add(newfeedback)
        db.commit()
        db.refresh(newfeedback)
        return {"message": "Feedback enregistré avec succès dans PostgreSQL"}
    except Exception as e:
        db.rollback()
        return {"error": str(e)}
    finally:
        db.close()
        
@app.post("/infolettre")
async def recevoir_infolettre(data: Infolettre):
    db = SessionLocal()
    try:
        newinfolettre = InfolettreDB(**data.dict())
        db.add(newinfolettre)
        db.commit()
        db.refresh(newinfolettre)
        return {"message": "Email enregistré avec succès dans PostgreSQL"}
    except Exception as e:
        db.rollback()
        return {"error": str(e)}
    finally:
        db.close()