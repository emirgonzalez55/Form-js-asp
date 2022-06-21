<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirmacion</title>
</head>
<body>
    <div>  
        <h3 style="text-align: center;">Datos de la operación</h3>
    <%
        Response.Cookies("usuario")("Nombre") = request.form("nombre")
        Response.Cookies("usuario")("Apellido") = request.form("apellido")

        datousuario1 = Request.Cookies("usuario")("Nombre")
        datousuario2 = Request.Cookies("usuario")("Apellido")        
       
    %>
    <%
        equipo = request.form("equipo")
        ubicacion = request.form("ubicacion")
        entradas = request.form("entradas")
        nombre = request.form("nombre")
        precio = request.form("precio")

        apellido = request.form("apellido")
        nombre = request.form("nombre")
        email = request.form("email")
        tipotarjeta = request.form("tipotarjeta")

        response.write("<table border='1' style='margin: auto;'><tr><td>Encuentro: " & equipo & " </td><td>Ubicacion: "& ubicacion &"</td><td>Cantidad: "& entradas &"</td><td>Precio:  "& precio &"</td></tr><tr><td>Apellido: " & apellido & " </td><td>Nombre: "& nombre &"</td><td>E-Mail: "& email &"</td><td>Tarjeta: "& tipotarjeta &"</td></tr></table>") 
    %>
    <br>
    <a style="display: flex; justify-content: center; " href="finalizacion.asp" ><img src="imagenes/qr-code.png" alt="" width="80" height="80"></a>
    </div>
    
</body>
</html>