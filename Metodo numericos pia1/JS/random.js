function randomlinks(){
    var myrandom=Math.round(Math.random()*5)
    var links=new Array()
    links[0]="file:///D:/3D%20Objects/Metodo%20numericos%20pia1/Metodos/Interpolacion/InterpolacionL.html"
    links[1]="file:///D:/3D%20Objects/Metodo%20numericos%20pia1/Metodos/Interpolacion/NewtonAdelante.html"
    links[2]="file:///D:/3D%20Objects/Metodo%20numericos%20pia1/Metodos/Interpolacion/NewtonAtras.html"
    links[3]="file:///D:/3D%20Objects/Metodo%20numericos%20pia1/Metodos/Interpolacion/Lagrange.html"
    links[4]="file:///D:/3D%20Objects/Metodo%20numericos%20pia1/Metodos/Interpolacion/NewtonDD.html"

 
    window.location=links[myrandom]
}