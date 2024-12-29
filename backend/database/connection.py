from sqlalchemy import create_engine, Column, Integer, String, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Configuração do banco de dados
DATABASE_URL = "postgresql://caio:0406@localhost/manusys"

engine = create_engine(DATABASE_URL)
Session = sessionmaker(bind=engine)
Base = declarative_base()

# Sessão
def get_session():
    session = Session()
    try:
        yield session
    finally:
        session.close()

