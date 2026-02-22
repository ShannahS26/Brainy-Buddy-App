from passlib.context import CryptContext

from fastapi import FastAPI, HTTPException
from app.routes import auth

from app.db.database import SessionLocal, engine, Base
Base.metadata.create_all(bind=engine)

from app.models import user
from app.schemas.user_schema import UserCreate, UserResponse


app = FastAPI()
app.include_router(auth.router, prefix="/auth", tags=["Auth"])

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

@app.get('/')
def read_root():
    return {"message": "Brainy Pop API is running!"}