

const container1= document.querySelector(".container1");
const seat = document.querySelectorAll(".row seat:not(.occupied)");
const count=document.getElementById("count");
const movie=document.getElementById("movie");
const total=document.getElementById('total');

container1.addEventListener("click",(e)=>{

    if(e.target.classList.contains("seat")&&!e.target.classList.contains('occupied')){

        e.target.classList.toggle('selected')

    }
        updateCountAndAmount();

});

movie.addEventListener('change',(e)=>{
    updateCountAndAmount();
})

function updateCountAndAmount() {

    const seatSelected=document.querySelectorAll(".row .seat.selected");
    const ticketAmount=movie.value;
    count.innerHTML= seatSelected.length;
    total.innerHTML= ticketAmount*seatSelected.length;

}

