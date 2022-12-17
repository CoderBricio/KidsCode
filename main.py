from app import app
import json
from app.models import User
from flask_login import login_user, logout_user, current_user
from flask import render_template, request, redirect, url_for, flash

# rota da home do dia 
@app.route("/HomeDia", methods=["GET"])
@app.route("/", methods=["GET"])
def home1():
    return render_template('HomeDia.html')

# rota da home da noite 
@app.route("/HomeNoite", methods=["GET"])
def home2():
    return render_template("HomeNoite.html")

@app.route("/Registro", methods=["GET", "POST"])
def Registro():
    if request.method == "POST":
        Nome = request.form['Nome'].upper()
        Email = request.form['Email'].upper()
        Senha = request.form['Senha']
        Idade = request.form['Idade']
        """ ConfirmacaoSenha = request.form['ConfirmacaoSenha']

        if Senha == ConfirmacaoSenha:
            Usuario = User(Nome, Email, Senha, Idade)
            Usuario.adicionarBanco()
            #retorna para a rota de login (página de login)
            return redirect(url_for('login.html'))
        else:
            return "As senhas não se coincidem (tratar no frontend)" """

    return render_template("Registro/Registro.html")

# login com retorno para a home do dia 
@app.route("/login", methods=["GET", "POST"])
def login1():
    if request.method == "POST":
        Email = request.form['EmailLogin'].upper()
        Senha = request.form['SenhaLogin']

        if not User.verificarEmail(Email) or not User.validarSenha(Email, Senha):
            return redirect(url_for('login1'))
        else:
            DadosUsuario = User.buscarUsuarioPorEmail(Email)
            Usuario = User(DadosUsuario[0], DadosUsuario[1], DadosUsuario[2], DadosUsuario[3])
            login_user(Usuario)
            #return render_template('teste.html')
            return redirect(url_for('Perfil/perfil.html'))

    return render_template("Login/Login.html")

# login com retorno para a home da noite 
@app.route("/login", methods=["GET", "POST"])
def login2():
    if request.method == "POST":
        Email = request.form['EmailLogin'].upper()
        Senha = request.form['SenhaLogin']

        if not User.verificarEmail(Email) or not User.validarSenha(Email, Senha):
            return redirect(url_for('login2'))
        else:
            DadosUsuario = User.buscarUsuarioPorEmail(Email)
            Usuario = User(DadosUsuario[0], DadosUsuario[1], DadosUsuario[2], DadosUsuario[3])
            login_user(Usuario)
            #return render_template('teste.html')
            return redirect(url_for('Perfil/perfil.html'))

    return render_template("Login/Login.html")

@app.route("/Perfil", methods=["GET"])
def Perfil():
    return render_template('Perfil/Perfil.html')

@app.route("/menuJogos", methods=["GET"])
def menuJogos():
    return render_template('MenuJogos/menuJogos.html')

    # PARTE DOS JOGOS 

# JOGO QUIZ

@app.route("/quiz", methods=["GET"])
def quiz():
    return render_template('JogoQuiz/quiz.html')

@app.route("/jogo_quiz", methods=["GET"])
def jogo_quiz():
    return render_template('JogoQuiz/Jogo-Quiz/jogo-quiz.html')

# JOGO MEMORIA

@app.route("/memoria", methods=["GET"])
def memoria():
    return render_template('JogoMemoria/memoria.html')

@app.route("/jogo_memoria", methods=["GET"])
def jogo_memoria():
    return render_template('JogoMemoria/Jogo-Memoria/jogo-memoria.html')

# JOGO DESENHO 

@app.route("/Desenho", methods=["GET"])
def Desenho():
    return render_template('JogoDesenho/Desenho.html')

@app.route("/jogo_desenho", methods=["GET"])
def jogo_desenho():
    return render_template('JogoDesenho/Jogo-Desenho/jogo-desenho.html')

# JOGO COBRINHA 

@app.route("/Cobrinha", methods=["GET"])
def Cobrinha():
    return render_template('JogoCobrinha/Cobrinha.html')

@app.route("/jogo_cobrinha", methods=["GET"])
def jogo_cobrinha():
    return render_template('JogoCobrinha/Jogo-Cobrinha/jogo-cobrinha.html')

# endpoint para deslogar o usuário (ao acessar ele é deslogado (logout_user()) e redirecionado para a rota de login)
@app.route("/Logout")
def logout():
    logout_user()
    return redirect(url_for('Login/login.html'))

app.run(debug=True)