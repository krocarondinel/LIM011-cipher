//llamado a caja1 y caja #número de desplazamientos
const text = document.getElementById("firstBox");
const number = document.getElementById("numberOfTrips");

//"uso de addEventListener" para "click" del botón cifrar
//Id(cipher) de button "CIFRAR"
// NO ESTOY USANDO UN ONCLICK, practicar para quedar claro
const cipher = document.getElementById("cipher");
cipher.addEventListener('click',()=> {
    // da el valor del texto (en forma de string)
    const toTranslate = text.value;
    // da el valor en tipo de dato número (transformé el string)
    const numberOfTrips = parseInt(number.value);
    let encryptedMessage= ""
        for (i=0; i<toTranslate.length; i++){
             let ascii = toTranslate.charCodeAt(i)
           // mayusculas, minusculas, números 
             if(ascii>=65 && ascii<=90) {  
             let newAsciiCapitalLetters = (ascii-65+numberOfTrips)%26+65;
             let newWordCapitalLetters = String.fromCharCode(newAsciiCapitalLetters);
             encryptedMessage += newWordCapitalLetters;
            } else if(ascii>=97 && ascii<=122){
                let newAsciiLowercase = (ascii-97+numberOfTrips)%26+97;
                let newWordLoweercase = String.fromCharCode(newAsciiLowercase);
                encryptedMessage += newWordLoweercase;
            } else if(ascii>=48 && ascii<=57){
                let newAsciiNumbers = (ascii-48+numberOfTrips)%10+48;
                let newWordNumber = String.fromCharCode(newAsciiNumbers);
                encryptedMessage += newWordNumber;
            } else{
            // casos especificos
               switch (ascii){
                   // 10 (enter), 32(espacio),46(.),44(,),35(#),37(%)
                    case 10:
                        encryptedMessage +=String.fromCharCode(10);
                        break;
                    case 32:
                        encryptedMessage +=String.fromCharCode(32)
                        break;
                    case 46:
                        encryptedMessage +=String.fromCharCode(46);
                        break;
                    case 44:
                        encryptedMessage +=String.fromCharCode(44);
                        break;
                    case 35:
                        encryptedMessage +=String.fromCharCode(35);
                        break;
                    case 37:
                        encryptedMessage +=String.fromCharCode(37);
                        break;
               }
            }    
            document.getElementById("secondBox").value= encryptedMessage
    }
})

//Id(descipher) de button "DESCIFRAR"
//"nombres"2: ej. ascii2  para ahorrar espacio
// NO ESTOY USANDO UN ONCLICK
const descipher = document.getElementById("descipher");
descipher.addEventListener('click',()=> {
    const toDescipher = text.value;
    // da el valor en tipo de dato número (transformé el string)
    const numberOfTripsToBack = parseInt(number.value);
    let descipherMessage= ""
        for (i=0; i<toDescipher.length; i++){
             let ascii2 = toDescipher.charCodeAt(i)
           // mayusculas, minusculas, números 
             if(ascii2>=65 && ascii2<=90) {  
             let newAsciiCapitalLetters2 = (ascii2-90-numberOfTripsToBack)%26+90;
             let newWordCapitalLetters2 = String.fromCharCode(newAsciiCapitalLetters2);
             descipherMessage += newWordCapitalLetters2;
            } else if(ascii2>=97 && ascii2<=122){
                let newAsciiLowercase2 = (ascii2-122-numberOfTripsToBack)%26+122;
                let newWordLoweercase2 = String.fromCharCode(newAsciiLowercase2);
                descipherMessage += newWordLoweercase2;
            } else if(ascii2>=48 && ascii2<=57){
                let newAsciiNumbers2 = (ascii2-57-numberOfTripsToBack)%10+57;
                let newWordNumber2 = String.fromCharCode(newAsciiNumbers2);
                descipherMessage += newWordNumber2;
            } else{
            // casos especificos
               switch (ascii2){
                   // 10 (enter), 32(espacio),46(.),44(,),35(#),37(%)
                    case 10:
                        descipherMessage +=String.fromCharCode(10);
                        break;
                    case 32:
                        descipherMessage +=String.fromCharCode(32)
                        break;
                    case 46:
                        descipherMessage +=String.fromCharCode(46);
                        break;
                    case 44:
                        descipherMessage +=String.fromCharCode(44);
                        break;
                    case 35:
                        descipherMessage +=String.fromCharCode(35);
                        break;
                    case 37:
                        descipherMessage +=String.fromCharCode(37);
                        break;
               }
            }    
            document.getElementById("secondBox").value= descipherMessage
    }
})