from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from database.connection import get_session
from database.models import User
from schemas.users import UserCreate, UserResponse
from auth import get_current_user

router = APIRouter()

@router.post("/", response_model=UserResponse)
def create_user(user: UserCreate, db: Session = Depends(get_session), current_user: User = Depends(get_current_user)):
    db_user = User(name=user.name, email=user.email)
    db_user.set_password(user.password)  # Hash the password before storing
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

@router.get("/{user_id}", response_model=UserResponse)
def get_user(user_id: int, db: Session = Depends(get_session), current_user: User = Depends(get_current_user)):
    db_user = db.query(User).filter(User.id == user_id).first()
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user

@router.get("/", response_model=List[UserResponse])
def get_users(db: Session = Depends(get_session), current_user: User = Depends(get_current_user)):
    users = db.query(User).all()
    if not users:
        raise HTTPException(status_code=404, detail="Users not found")
    return users