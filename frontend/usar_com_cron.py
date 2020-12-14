from datetime import date
from exemplo_djavue2.frontend.helpers.api import api
import telepot

data_atual = date.today()
data_em_texto = "{}/{}".format(data_atual.day, data_atual.month)

for i in api.aniversarios:
    if data_em_texto == i["date"]:
        name = i["name"]
        phone = i["phone"]
        mensagem= i["nova_mensagem"]

if name:
    bot= telepot.Bot("1358772777:AAFG_blI3UV7nTOofCMG3W1R-IC0zRQYAH0")
    update=bot.getUpdates()
    id = 1117141387
    bot.sendMessage(id,mensagem)

else:
    pass
