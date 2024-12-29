import sys
import os
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from database.connection import engine, Base
from database.models import User

# Criar todas as tabelas no banco de dados
def init_db():
    Base.metadata.create_all(bind=engine)

if __name__ == "__main__":
    init_db()
    print("Tabelas criadas com sucesso!")
