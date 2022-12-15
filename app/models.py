from app import db, login_manager
from passlib.context import CryptContext
from flask_login import UserMixin

# CRIPTOGRAFIA DAS SENHAS
cripto = CryptContext(
    schemes=["pbkdf2_sha256"],
    default="pbkdf2_sha256",
    pbkdf2_sha256__default_rounds=50000 )

@login_manager.user_loader

def get_user(Id):
    db.mycursor.execute("SELECT * FROM Usuarios WHERE Id = %s", [Id])
    return db.mycursor.fetchall()

class User(UserMixin):
    def __init__(self, Nome, Email, Senha, Idade):
        self.Nome = Nome
        self.Email = Email
        self.Senha = cripto.hash(Senha)
        self.Idade = Idade

    def is_authenticated(self):
        return self._authenticated

    def adicionarBanco(self):
        Values = (self.Nome,  self.Email, self.Senha, self.Idade)
        db.mycursor.execute("INSERT INTO usuarios VALUES (%s, %s, %s, %s, NULL)", Values)
        db.db.commit()

    def __buscarSenhaPorEmail(Email):
        db.mycursor.execute("SELECT Senha FROM usuarios WHERE Email = %s", [Email])
        Resultado = db.mycursor.fetchall()
        Senha = [''.join(i) for i in Resultado]
        Senha = ''.join(Senha)
        return Senha

    @staticmethod
    def buscarUsuarioPorEmail(EmailUsuario):
        db.mycursor.execute("SELECT * FROM usuarios WHERE Email = %s", [EmailUsuario])
        return db.mycursor.fetchone()

    @staticmethod
    def validarSenha(EmailUsuario, SenhaUsuario):
        SenhadoBanco = User.__buscarSenhaPorEmail(EmailUsuario)
        return cripto.verify(SenhaUsuario, SenhadoBanco)
        
    @staticmethod
    def verificarEmail (EmailUsuario):
        db.mycursor.execute("SELECT Email FROM usuarios WHERE Email = %s", [EmailUsuario])
        Resultado = db.mycursor.fetchall()
        return True if Resultado else False