


let peso= prompt("ingrese su peso en kg")
let altura = prompt("Ingrese su estatura en centimetros")
let alturaConver = Math.pow((altura/100),2)
let resultado = (peso/alturaConver)
let resultado2 = resultado.toFixed(2)



if( resultado <16.5){
alert("tu resultado fue"+" " + resultado + " " +"TIENES BAJO PESO SEVERO")   
    }
else if ((resultado >16.5)&&(resultado<= 18.5)){
    alert("tu resultado fue" + " "+ resultado2 + " "+ "TIENES BAJO PESO")
    }
else if((resultado> 18.6) && (resultado <= 24.9)){
    alert("tu resultado fue" + " "+ resultado2 + " " + "TIENES PESO NORMAL")
    }
else if((resultado >25) && (resultado<=29.9)){
    alert("tu resultado fue" + " "+ resultado2 + " " + "TIENES SOBREPESO")
    }
else if((resultado >30) && (resultado <=34.9)){
    alert("tu resultado fue:" + " " + resultado2 +" " +  "TIENES OBESIDAD TIPO 1")
    }
else if((resultado >35) &&(resultado<=39.9)){   
    alert("tu resultado fue:" + " "+ resultado2 + " " +  "TIENES OBESIDAD TIPO 2")
    }
else if (resultado >= 40){
    alert("Tu resultado fue:" + " " + resultado2 + " " + "TIENES OBESIDAD TIPO 3")
    }
else{
            alert("error")
}








/*rango de imc
=<16.5 ------ bajo peso severo
>16.5< 18.5 ------- bajo de peso
> 18.5<25   ---------peso normal
>25 <30  -----sobre peso
>30 <35 ------obesidad tipo1
>35 <40 ------obesidad tipo2
>40------- obesidad tipo3 */
