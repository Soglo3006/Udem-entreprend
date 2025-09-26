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
    allow_origins=["https://udementreprend.netlify.app","http://localhost:5173"],  
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

Base.metadata.create_all(bind=engine)

class Benevole(BaseModel):
    firstname: str
    lastname: str
    email: str
    programme: Optional[str] = None
    message: Optional[str] = None
    
    
def envoyer_email(to_email,firstname):
    message = Mail(
        from_email="ablbooh0@gmail.com",
        to_emails=to_email,
        subject="Confirmation Bénévole",
        html_content=f"<p>Bonjour {firstname},</p><p>Merci d'avoir complété le formulaire pour devenir bénévole.</p><p>Nous vous contacterons bientôt avec plus d'informations.</p><p>Cordialement,<br>L'équipe d'Udem Entreprend</p>"
    )
    try:
        sg = SendGridAPIClient(SENDGRID_API_KEY)
        sg.send(message)
        return True
    except Exception as e:
        print(f"Erreur lors de l'envoi de l'email: {e}")
        return False

@app.post("/benevole")
async def recevoir_benevole(data: Benevole):
    email_ok = envoyer_email(data.email, data.firstname)
    if not email_ok:
        return {"error": "Échec de l'envoi de l'email"}
    
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
