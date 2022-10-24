function ingresarNombre(){
    let nombreIngresado= prompt("Ingrese su nombre.");
    alert("Bienvenido "+nombreIngresado+", en esta web vas a poder calcular tu sueldo.");
}
 let horas=0;
 let valor=0;
    let entrada= prompt("Tocar cualquier letra para ingresar.\n '888' para salir.");
    while(entrada!=888){
        ingresarNombre();
        do{ 
            horas=prompt("ingresar la cantidad de horas trabajadas.");
            console.log(horas);
        }while(parseInt(horas)<0 ||parseInt(horas)==0)
        do{
            valor=prompt("ingresar cuanto le pagan por hora: ")
            console.log(valor);
        }while(parseInt(valor)<0 ||parseInt(valor)==0)
        sueldo=horas*valor
        console.log(sueldo);
        if(horas<192){
            alert("Su sueldo es de: "+ sueldo+" pesos"+"\nlas horas que trabajas mensualmente estan dentro de lo que establece la ley.")
        }
        else{
            alert("Su sueldo es de: "+sueldo+" pesos "+"\nlas horas que trabajas mensualmente NO estan dentro de lo que establece la ley .")
        }
        entrada=prompt("Volver a calcular sueldo.\n'888' Para salir.")
    }
    alert("Muchas gracias por elegirnos.")