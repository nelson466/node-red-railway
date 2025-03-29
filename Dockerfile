FROM nodered/node-red:latest

# Si deseas instalar nodos adicionales, puedes agregar comandos RUN aquí.
# Ejemplo:
# RUN npm install node-red-dashboard

# Expone el puerto por defecto de Node-RED (1880)
EXPOSE 1880
