<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Finalizacion</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
    <div>
        <% 

            datousuario1 = Request.Cookies("usuario")("Nombre")
            datousuario2 = Request.Cookies("usuario")("Apellido")

            
            if  (datousuario1) = "" and (datousuario2) = "" Then
                response.write("<h3 style='text-align: center;'>Volver a <a href='principal.html'>inicio</a> </h3>")
            else
                response.write("<h3 style='text-align: center;'>Gracias por visitar nuestra página</h3>")
                response.write("<table border='1' ><tr><td>Nombre: " & datousuario1 & " </td><td>Apellido: "& datousuario2 &"</td></tr></table>") 
            end if           

        %>
</div>
</body>
</html>