curl --request PUT \
  --url 'http://localhost:8005/banco/realizarsaque?=' \
  --header 'content-type: application/json' \
  --data '{"agencia": "001", "conta_corrente": "999999", "nome_completo": "João", "tel": "99999999", "saque": 10}'