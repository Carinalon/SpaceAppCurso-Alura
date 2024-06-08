function uno (dos) {
    console.log("uno")
    setTimeout(dos, 2000)
   
}

function dos (tres) {
    console.log("dos")
    setTimeout(tres, 2000)
}
function tres (cuatro) {
    console.log("tres")
    setTimeout(cuatro, 2000)
}
function cuatro (cinco) {
    console.log("cuatro")
    setTimeout(tres, 2000)
}
function cinco(){
    console.log("Cinco")
}

//callback hell
setTimeout(() => uno(
    () => dos(
        () => tres(
            () => cuatro(
                () => cinco(),)))), 3000);


//promise estructura

const solicitud = new Promise((resolve, reject) => {
    const response = "resolve"
    if(response == "resolve"){

    }
    else {
        reject("La promesa no se cumplió")
    }
})
console.log(solicitud)
