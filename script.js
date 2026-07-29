function convertTemperature(){

    let temp = document.getElementById("temp").value;
    let unit = document.getElementById("unit").value;

    let error = document.getElementById("error");

    if(temp==="" || isNaN(temp)){
        error.innerHTML="Please enter a valid numeric value.";
        return;
    }

    temp = parseFloat(temp);

    let c,f,k;

    if(unit==="c"){

        if(temp < -273.15){
            error.innerHTML="Temperature cannot be below absolute zero!";
            return;
        }

        c=temp;
        f=(temp*9/5)+32;
        k=temp+273.15;
    }

    else if(unit==="f"){

        c=(temp-32)*5/9;

        if(c<-273.15){
            error.innerHTML="Temperature cannot be below absolute zero!";
            return;
        }

        f=temp;
        k=c+273.15;
    }

    else{

        if(temp<0){
            error.innerHTML="Temperature cannot be below absolute zero!";
            return;
        }

        k=temp;
        c=temp-273.15;
        f=(c*9/5)+32;
    }

    error.innerHTML="";

    document.getElementById("celsius").innerHTML=
    "Celsius : "+c.toFixed(2)+" °C";

    document.getElementById("fahrenheit").innerHTML=
    "Fahrenheit : "+f.toFixed(2)+" °F";

    document.getElementById("kelvin").innerHTML=
    "Kelvin : "+k.toFixed(2)+" K";
}