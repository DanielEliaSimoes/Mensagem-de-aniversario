import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

host = 'smtp.office365.com'
port = 587
user = 'robozinhoteste2@outlook.com'
password = 'daniboyD'

server = smtplib.SMTP(host, port)
server.ehlo()
server.starttls()
server.login(user, password)

message = 'Teste do segundo arquivo de email usando python'
email_msg = MIMEMultipart()
email_msg['From'] = user
email_msg['To'] = 'daniel.simoes.elias@gmail.com'
email_msg['Subject'] = 'Funciona aí vai, nunca te pedi nada'

email_msg.attach(MIMEText(message, 'plain'))

server.sendmail(email_msg['From'], email_msg['To'], email_msg.as_string())
server.quit()