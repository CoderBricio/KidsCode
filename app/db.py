import mysql.connector

#essas configurações deve ser mudada quando for configurar o servidor para deploy
db = mysql.connector.connect( host="localhost",
                              user="root",
                              password="MySQL@2022",
                              database="kidscode"
)

mycursor = db.cursor()