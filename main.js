
const valor = 200;

function calcTotal(){

    let cant = document.getElementById("cantTickets").value;
    let categoria = document.getElementById("categoria").value;

    let desc;

    if (categoria == 1) {
        
        desc= 0.8;

    }else if(categoria == 2){

        desc = 0.5;
    }else if(categoria == 3){

        desc = 0.15;
    }else{

        desc = 0;
    }

    total = valor*cant;
    total-=total*desc;


    document.getElementById("total").innerHTML = total;


}

function updCat(cat) {
    
    let categoria = document.getElementById("categoria").value = cat;
    calcTotal();

}

function resetSpan() {
    
    document.getElementById("total").innerHTML = "";

    console.log("dentro");
}